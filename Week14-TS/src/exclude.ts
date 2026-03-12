type EventType = 'click' | 'scroll' | 'mousemove'
type ExcludeEvent = Exclude<EventType,'scroll'>

const handleEvent = (event : ExcludeEvent) => {
    console.log(`Handling Event : ${event}`)
}

handleEvent("click");
handleEvent("mousemove");
// handleEvent("scroll")  // This will give you an error