#include <iostream>
#include <map>
#include <iterator>

using namespace std;

int main (void) {
    map <int, int> map_test;
    map_test.insert(pair <int, int> (1, 10));
    map_test.insert(pair <int, int> (2, 20));
    map_test.insert(pair <int, int> (3, 30));
    map_test.insert(pair <int, int> (4, 40));
    
    map <int, int> :: iterator itr;
    for ( itr = map_test.begin(); itr != map_test.end(); ++itr) {
        cout << "\t" << itr -> first << "\t" << itr -> second << endl;
    }

    return 0;
    }