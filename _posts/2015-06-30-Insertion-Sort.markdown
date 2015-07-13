---
tag: Algorithms
javascript: insertionSort.js
math: true
codesnippet: true
---

Insertion sort is basically trying to insert an item into an already sorted array.  For example, say you have these numbers to start:

$$ 1, 2, 3, 5 $$

Now you're given the task to place $$4$$ into the array.  How do you do this?

Insertion sort will start at the last index.  Work its way to the left until it reaches a value that is less than it.  In the case of this example $$4$$ will be compared 
with $$5$$ and then $$3$$.  Because $$3$$ is less than $$4$$ insertion sort will stop going through the array and insert $$4$$ between $$3$$ and $$4$$.  Leaving the array as this:

$$ 1, 2, 3, 4, 5 $$

The code to accomplish this is here:

<pre class="prettyprint">
function println(string) {
console.log(string);
}

var insert = function(array, rightIndex, value) {
	var i
    for (i = rightIndex;i >= 0 && array[i] > value; i--) {
    	array[i + 1] = array[i];
    }

    array[i + 1] = value;
};


var insertionSort = function(array) {
    for(var i = 1; i < array.length ; i++) {
        insert(array, i - 1, array[i]);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
println("Array after sorting:  " + array);

</pre>
Input Array: $$ 22, 11, 99, 9, 7, 42 $$ <br>
Output Array: $$ 7, 9, 11, 22, 42, 99 $$

<canvas id="myCanvas" width="500" height="50" style="border:1px solid #E4E4E4;"></canvas>
<h5>Try out different Numbers, separated by a space.</h5>
<input id="number"><button id="sortButton" onclick="sortNewNums()">Let's see it!</button>

There are many ways to accomplish this algorithm. If you analayze this code however you can see that insertionSort <b>can</b> call insert for each index in the array ($$1,2,3...,n-1$$). If the 
array must slide each time to the right for each new number being inserted $$k = n - 1$$.  The first time $$k = 1$$ the second time $$k = 2$$ and the third time $$k = 3$$ and so on. Therefore
the total time spent inserting into sorted array is:

$$c\bullet 1 + c\bullet 2 + c\bullet 3 + ... c\bullet(n - 1) = c\bullet(1 + 2 + 3 + ...+(n - 1))$$

Now to describe a formula for this you can look at this example to see how it is derived. Say we have:

$$1 + 2 + 3 + 4 + 5 + 6$$

The total is $$21$$.  A trick to get this sum is to take the first and last number and add them ($$1 + 6 = 7$$).  Now divide the total number of elements by $$2$$ or ($${6 \over 2} = 3$$). Then
multiply them together ($$7 \bullet 3 = 21$$). So now we can derive this for $$1$$ to $$n$$:

$$(n + 1) \bullet {n \over 2}$$

Or: 

$${n^2 \over 2} + {n \over 2}$$

Now going back to insertion sort we can say that:

$$c \bullet (n - 1 + 1)((n - 1) / 2) = cn^2/2 - cn/2$$

Using big-$$\theta$$ notation we discard the lower terms ($$cn/2$$), $$c$$, and $$2$$.  Leaving us with $$\theta(n^2)$$.

However insertion sort won't always be $$\theta(n^2)$$.  Just in the worst case scenario.  Sometimes the array maybe already sorted and there will be no need to slide numbers to the right.
This would be the best case scenario. And that would just be a constant time.  Or $$\theta(n)$$.  To sum up insertion sort:


$$\bullet$$Worst case: $$\theta(n^2)$$<br>
$$\bullet$$Best case: $$\theta(n)$$<br>
$$\bullet$$Average case for a random array: $$\theta(n^2)$$<br>
$$\bullet$$Almost sorted case: $$\theta(n)$$<br>
