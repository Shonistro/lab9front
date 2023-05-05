import React, {useState} from "react";


function FilterExpense({years, selected, onFilterChange}) {
    const [filteredYear, setFilteredYear] = useState("2020");


    const filterChangeHandler = (event) => {
        onFilterChange(event.target.value);
    };
      
    return (
        <div className='expenses-filter'>
          <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select value={selected} onChange={filterChangeHandler}>
                {
                    years.map((year) => <option value={year}>{year}</option>)
                }
            </select>
          </div>
        </div>
    );
}

export default FilterExpense;