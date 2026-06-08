// Last updated: 6/8/2026, 11:50:51 AM
type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    private events: Map<string, Callback[]> = new Map();
    
    subscribe(eventName: string, callback: Callback): Subscription {
        const callbacks = this.events.get(eventName) ?? [];
        callbacks.push(callback);
        this.events.set(eventName, callbacks);

        return {
            unsubscribe: () => {
                const callbacks = this.events.get(eventName);
                if (!callbacks) return;
                
                const idx = callbacks.indexOf(callback);
                if (idx != -1)
                    this.events.set(eventName, callbacks.toSpliced(idx, 1));
            }
        };
    }
    
    emit(eventName: string, args: any[] = []): any[] {
        const callbacks = this.events.get(eventName) ?? [];
        return callbacks.map(cb => cb(...args));
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */