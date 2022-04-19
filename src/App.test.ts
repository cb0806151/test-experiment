

it('verify basic addition', () => {
  expect(5 + 2).toBe(7)
});

it('verify type check failure', () => {
  const a: string = 5
  expect(a).toBe(5)
});

export {}