#include <iostream>
#include <map>
#include <iterator>

using namespace std;

void printAllSubArray(int arr[], int n) {
    multimap <int, int> map_sum;
    multimap <int, int> :: iterator itr;
    int sum = 0, i;
    
    map_sum.insert(pair <int, int> (0, -1));

    for ( i = 0; i < n; ++i ) {
        sum += arr[i];
        cout << sum << " " << i << endl;
        map_sum.insert(pair <int, int> (sum, i));
    }

    cout << "MAP" << endl;

    for ( itr = map_sum.begin(); itr != map_sum.end(); ++itr ) {
        cout << "\t" << itr -> first << "\t" << itr -> second << endl;
    }
}

int main(void) {
    int arr[] = { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2},
        n = sizeof(arr) / sizeof(arr[0]);

    printAllSubArray(arr, n);

    return 0;
}