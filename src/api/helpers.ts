// Simulate a connection
export async function stall(stallTime = 600) {
  await new Promise(resolve => setTimeout(resolve, stallTime));
}
