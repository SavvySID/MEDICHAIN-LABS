// smart-contracts/src/Permissions.move

module 0xYourModuleAddress::Permissions {
    use std::signer;
    use std::string;
    use std::vector;

    // Struct to represent an access permission
    struct AccessPermission has copy, drop, store {
        entity: address,
        access_type: string::String, // e.g., "read" or "read/write"
    }

    // Resource to store Access Permissions for an account
    struct AccessList has key {
        permissions: vector<AccessPermission>,
    }

    // Initializes the AccessList resource for the account if it doesn't already exist
    public fun init_access_list(account: &signer) {
        if (!exists<AccessList>(signer::address_of(account))) {
            move_to(account, AccessList { permissions: vector::empty<AccessPermission>() });
        }
    }

    // Grants access to a specific entity
    public fun grant_access(account: &signer, entity: address, access_type: string::String) acquires AccessList {
        let address = signer::address_of(account);
        let mut access_list = borrow_global_mut<AccessList>(address);

        // Check if the entity already has access and update the access type if it exists
        let len = vector::length(&access_list.permissions);
        let mut i = 0;
        while (i < len) {
            let perm = vector::borrow_mut(&mut access_list.permissions, i);
            if (perm.entity == entity) {
                perm.access_type = access_type;
                return;
            }
            i = i + 1;
        }

        // If the entity doesn't already have access, add a new permission
        let permission = AccessPermission {
            entity,
            access_type,
        };
        vector::push_back(&mut access_list.permissions, permission);
    }

    // Revokes access for a specific entity
    public fun revoke_access(account: &signer, entity: address) acquires AccessList {
        let address = signer::address_of(account);
        let mut access_list = borrow_global_mut<AccessList>(address);

        // Find and remove the entity from the permissions list
        let len = vector::length(&access_list.permissions);
        let mut i = 0;
        while (i < len) {
            let perm = vector::borrow(&access_list.permissions, i);
            if (perm.entity == entity) {
                vector::remove(&mut access_list.permissions, i);
                return;
            }
            i = i + 1;
        }
    }

    // Gets the access permissions for the account
    public fun get_access_list(account: &signer): vector<AccessPermission> acquires AccessList {
        let address = signer::address_of(account);
        if (!exists<AccessList>(address)) {
            return vector::empty<AccessPermission>();
        }
        let access_list = borrow_global<AccessList>(address);
        vector::copy(&access_list.permissions)
    }
}
