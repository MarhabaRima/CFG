function minimum_total_waiting_time(arr) {
    // 1. Sort the array in ascending order to minimize total waiting time
    // Why are we sorting? Sorting the treatment times ensures that patients who need less time with the doctor are treated first.
    // This helps reduce the waiting time for the patients who are seen later.
    arr.sort((a, b) => a - b); // Sorting the array (e.g., from [3, 2, 1, 2, 6] to [1, 2, 2, 3, 6])

    // 2. Initialise variables to track total and current waiting times
    let total_waiting_time = 0; // keeps track of the total waiting time for all patients combined.
    let waiting_time = 0;       // keeps track of waiting time for each patient as we go through them.

    // 3. Loop through all patients except the last one
    // We don't need to calculate waiting time for the last patient because they don't make anyone else wait.
    for (let i = 0; i < arr.length - 1; i++) {
        // 4. Add the current patient's session time to the waiting time of the next patient
        // So that the next patient will have to wait for the current patient to finish.
        waiting_time += arr[i]; // Adding the current patient's treatment time to the waiting time.
        
        // 5. Add this waiting time to the total waiting time for all patients
        // Why? This keeps track of the cumulative waiting time for all patients.
        total_waiting_time += waiting_time; // The total waiting time includes the waiting time of all previous patients.
    }

    // 6. Return the total waiting time for all patients after the loop finishes
    return total_waiting_time; // This gives us the final total waiting time for all patients.
}

// Sample Input
const arr = [3, 2, 1, 2, 6]; // This array represents the times each patient needs with the doctor
console.log(minimum_total_waiting_time(arr));  // Expected Output: 17