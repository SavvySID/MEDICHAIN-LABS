// smart-contracts/src/PHR.move

module 0xYourModuleAddress::PHR {
    use std::signer;
    use std::string;
    use std::vector;

    // Struct to represent a Health Record
    struct HealthRecord has copy, drop, store {
        id: u64,
        title: string::String,
        details: string::String,
        created_at: u64,
    }

    // Resource to store Health Records for an account
    struct HealthRecords has key {
        records: vector<HealthRecord>,
    }

    // Initializes the HealthRecords resource for the account if it doesn't already exist
    public fun init_account(account: &signer) {
        if (!exists<HealthRecords>(signer::address_of(account))) {
            move_to(account, HealthRecords { records: vector::empty<HealthRecord>() });
        }
    }

    // Adds a health record to the account's HealthRecords resource
    public fun add_record(account: &signer, title: string::String, details: string::String) {
        let address = signer::address_of(account);
        let mut health_records = borrow_global_mut<HealthRecords>(address);
        let id = vector::length(&health_records.records) as u64;
        let timestamp = aptos_std::time::now_seconds();

        let record = HealthRecord {
            id,
            title,
            details,
            created_at: timestamp,
        };

        vector::push_back(&mut health_records.records, record);
    }

    // Gets the health records for the account
    public fun get_records(account: &signer): vector<HealthRecord> acquires HealthRecords {
        let address = signer::address_of(account);
        if (!exists<HealthRecords>(address)) {
            return vector::empty<HealthRecord>();
        }
        let health_records = borrow_global<HealthRecords>(address);
        vector::copy(&health_records.records)
    }

    // Access control to delete a health record
    public fun delete_record(account: &signer, id: u64) acquires HealthRecords {
        let address = signer::address_of(account);
        let mut health_records = borrow_global_mut<HealthRecords>(address);

        if (id >= vector::length(&health_records.records)) {
            return;
        }

        vector::remove(&mut health_records.records, id);
    }
}
