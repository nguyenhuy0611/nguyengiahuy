const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'SUBSTITUTION'],
    [47, 'GOAL'],
    [61, 'YELLOW CARD'],
    [64, 'YELLOW CARD'],
    [69, 'RED CARD'],
    [70, 'SUBSTITUTION'],
    [80, 'GOAL']
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

const time = 90;
const eventsCount = gameEvents.size;
const averageEventTime = time / eventsCount;
console.log(`Một sự kiện đã xảy ra, trung bình sau mỗi ${averageEventTime} phút`);

for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'HIỆP ĐẦU' : 'HIỆP HAI';
    console.log(`[${half}] ${min}: ${event}`);
}