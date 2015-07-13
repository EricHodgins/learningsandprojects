---
tag: Algorithms
javascript: selectionSort.js
---

This challenge was taken from [Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/p/project-selection-sort-visualizer).  The idea is to visualize the swapping that occurs with the selection sort algorithm.

<h1>The Visual</h1>
<canvas id="myCanvas" width="700" height="300" style="border:1px solid #000000;"></canvas>
<h5>Try out different Numbers, separated by a space.</h5>
<input id="number"><button id="sortButton" onclick="sortNewNums()">Let's see it!</button>

The algorithm starts at index 0 and starts working its way through the array until it reaches the last index. It will always switch the number when it reaches
a higher number then the current index (as you can see in the picture above, the lines show the switch).

The mathematical formula to exaplain this algorithm is: (n + 1) * (n / 2) or n^2/2 + n/2. Now, in terms for running time.  Because we're mostly only concerned about the 
higher terms n^2 is the most significant.

Therefore selection sort is Big-Theta(n^2).  This is a exponential algorithm.