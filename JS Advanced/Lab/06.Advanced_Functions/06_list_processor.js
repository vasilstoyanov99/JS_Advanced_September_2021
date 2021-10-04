function listProcessor(commands) {
    let modify = (function (){
        let innerList = [];
        return {
            add(element) {
                innerList.push(element);
            },
            remove(element) {
                innerList = innerList.filter(x => x !== element);
            },
            print() {
                console.log(innerList.join(','));
            }
        }
    })()

    commands.forEach(c => {
        const [command, element] = c.split(' ');
        modify[command](element);
    })
}
