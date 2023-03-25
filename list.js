class grid {
    #filteredData;
    #unFilteredData;

    constructor() {
        this.#filteredData = [];
        this.#unFilteredData = [];
        this.tbl = document.getElementById('list');
        this.tbody = document.querySelector('#list tbody');
    }

    set masterData(d) {
        if (d) {
            this.#filteredData = JSON.parse(d);
            this.#unFilteredData = JSON.parse(d);
        } else {
            this.#filteredData = [];
            this.#unFilteredData = [];
        }
        this.#PopulateData();
    }

    #fetchValue(v) {
        return v ? v : '';
    }

    #PopulateRow(d) {
        if (d) {
            let trow = document.createElement('tr');
            let nametd = document.createElement('td');
            let gaditd = document.createElement('td');
            let numbertd = document.createElement('td');
            let intd = document.createElement('td');
            let outtd = document.createElement('td');

            nametd.innerText = this.#fetchValue(d['name']);
            gaditd.innerText = this.#fetchValue(d['vehicleNumber']);
            numbertd.innerText = this.#fetchValue(d['mobileNumber']);
            intd.innerText = this.#fetchValue(d['inTime']);
            outtd.innerText = this.#fetchValue(d['outTime']);

            trow.appendChild(nametd);
            trow.appendChild(gaditd);
            trow.appendChild(numbertd);
            trow.appendChild(intd);
            trow.appendChild(outtd);

            if (this.#fetchValue(d['outTime'])) {
                trow.classList.add('gone');
            } else {
                trow.classList.add('no');
            }

            this.tbody.appendChild(trow);
        }
    }

    #PopulateEmptyRow(d) {
        let trow = document.createElement('tr');
        let nametd = document.createElement('td');
        nametd.innerText = 'No Records';
        trow.appendChild(nametd);
        this.tbody.appendChild(trow);
    }

    #PopulateData() {
        this.tbody.innerHTML = '';
        if (this.#filteredData && this.#filteredData.length > 0) {
            this.#filteredData.forEach(item => this.#PopulateRow(item));
        } else {
            this.#PopulateEmptyRow();
        }
    }

    Filter(txt) {
        const del = (item, e) => {
            if (item[e]) {
                return item[e].toLowerCase().includes(txt.toLowerCase());
            }
            return false;
        }
        this.#filteredData = this.#unFilteredData.filter(i => del(i, 'name') || del(i, 'vehicleNumber') || del(i, 'mobileNumber'));
        this.#PopulateData();
    }

    Clear() {
        this.#filteredData = this.#unFilteredData;
        this.#PopulateData();
    }
}