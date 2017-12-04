#include <iostream>
#include <map>
#include <iterator>

using namespace std;

int main(void) {
    multimap <int, int> test_multimap;
    
    test_multimap.insert(pair <int, int> (1, 10));
    test_multimap.insert(pair <int, int> (2, 30));
    test_multimap.insert(pair <int, int> (3, 30));
    test_multimap.insert(pair <int, int> (2, 40));
    test_multimap.insert(pair <int, int> (3, 50));

    multimap <int, int> :: iterator itr;
    
    for ( itr = test_multimap.begin(); itr != test_multimap.end(); ++itr ) {
        cout << "\t" << itr -> first << "\t" << itr->second << endl;
    }    

    return 0;
}
