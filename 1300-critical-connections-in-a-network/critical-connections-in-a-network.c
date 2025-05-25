#include <stdio.h>
#include <stdlib.h>

#define MAXN 100005

typedef struct Node {
    int val;
    struct Node* next;
} Node;

Node* graph[MAXN];
int disc[MAXN], low[MAXN], time_counter;
int** result;
int resultSize;

void addEdge(int u, int v) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->val = v;
    node->next = graph[u];
    graph[u] = node;
}

void dfs(int u, int parent) {
    disc[u] = low[u] = ++time_counter;

    for (Node* temp = graph[u]; temp; temp = temp->next) {
        int v = temp->val;
        if (v == parent) continue;

        if (!disc[v]) {
            dfs(v, u);
            if (low[v] > disc[u]) {
                result[resultSize] = (int*)malloc(2 * sizeof(int));
                result[resultSize][0] = u;
                result[resultSize][1] = v;
                resultSize++;
            }
            low[u] = (low[u] < low[v]) ? low[u] : low[v];
        } else {
            low[u] = (low[u] < disc[v]) ? low[u] : disc[v];
        }
    }
}

int** criticalConnections(int n, int** connections, int connectionsSize, int* connectionsColSize, int* returnSize, int** returnColumnSizes) {
    for (int i = 0; i < n; i++) {
        graph[i] = NULL;
        disc[i] = 0;
        low[i] = 0;
    }

    for (int i = 0; i < connectionsSize; i++) {
        int u = connections[i][0];
        int v = connections[i][1];
        addEdge(u, v);
        addEdge(v, u);
    }

    result = (int**)malloc(connectionsSize * sizeof(int*));
    resultSize = 0;
    time_counter = 0;

    for (int i = 0; i < n; i++) {
        if (!disc[i]) {
            dfs(i, -1);
        }
    }

    *returnSize = resultSize;
    *returnColumnSizes = (int*)malloc(resultSize * sizeof(int));
    for (int i = 0; i < resultSize; i++) {
        (*returnColumnSizes)[i] = 2;
    }

    return result;
}
