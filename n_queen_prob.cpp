#include <iostream>
#include <cstring>

using namespace std;

#ifndef N
#define N 4
#endif

void printBoard(int board[N][N]) {
	cout << endl <<"N Queen Solution" << endl;

	for (int i = 0; i < N; ++i) {
		for (int j = 0; j < N; ++j)
			cout << board[i][j] << "  ";
		cout << endl;
	}
}

bool isSafe(int board[N][N], int row, int col) {
	for (int i = 0; i < N; i++) 
		if (board[row][i])
			return false;

	for (int i = row, j = col; i >= 0 && j >= 0; i--, j--)
		if (board[i][j])
			return false;

	for (int i = row, j = col; i < N && j >= 0; i++, j--)
		if (board[i][j])
			return false;

	return true;	
}

void nQueen(int board[N][N], int col) {
	if (col >= N) {
		printBoard(board);
		return;
	}

	for (int row = 0; row < N; ++row) {
		// cout << "row" ;
		if (isSafe(board, row, col)) {
			board[row][col] = 1;
			nQueen(board, col + 1);
			board[row][col] = 0;
		}
	}
}

int main(void) {
	int board[N][N] = {0};
	cout << "Initial Board" << endl;
	printBoard(board);
	cout << "N Queen" << endl;
	nQueen(board, 0);
	return 0;
}