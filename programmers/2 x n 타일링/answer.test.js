function solution(n) {
  let answer = 0;
  let dp = Array(600001);

  dp.fill(0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007;
  }

  answer = dp[n];

  return answer;
}
test('Test case', () => {
  expect(solution(4)).toEqual(5);
});
