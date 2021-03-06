import { combineReducers } from "redux";

import { array } from "./array";
import { method } from "./method";
import { compareElements } from "./bubblesort";
import { swappingElements } from "./swap";
import { currentSorted } from "./sorted";
import { merge } from "./mergesort";
import { indices, pivot } from "./quicksort";
import { heapIndexes } from "./heapsort";

export default combineReducers({
    array, 
    method, 
    compareElements,
    swappingElements,
    currentSorted,
    merge,
    indices,
    pivot,
    heapIndexes,
});