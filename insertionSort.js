const inerstionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentEle = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentEle) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentEle;
  }
  return arr;
};
console.log(inerstionSort([4, 2, 6, 9, 7, 8, 3]));

/**
 * Certainly! Here are some topics you can consider to learn mathematics from basics to advanced levels:

1. Number Theory: Prime numbers, divisibility, modular arithmetic.
2. Algebra: Polynomials, equations, inequalities, functions, logarithms.
3. Geometry: Euclidean geometry, coordinate geometry, trigonometry, transformations.
4. Calculus: Differentiation, integration, limits, sequences, series.
5. Linear Algebra: Matrices, vector spaces, systems of linear equations.
6. Probability and Statistics: Basic probability, random variables, statistical analysis.
7. Discrete Mathematics: Combinatorics, graph theory, logic, set theory.
8. Differential Equations: Ordinary and partial differential equations.
9. Real Analysis: Continuity, limits, sequences, convergence, topology.
10. Complex Analysis: Complex numbers, analytic functions, contour integration.
11. Number Systems: Rational, irrational, real, and complex numbers.
12. Mathematical Logic: Propositional logic, predicate logic, proof techniques.

Remember that mathematics is a vast subject, and the above topics provide a broad overview. 
You can choose topics based on your interests and goals. It's also essential to practice regularly 
and solve problems to solidify your understanding of these topics.
 */
