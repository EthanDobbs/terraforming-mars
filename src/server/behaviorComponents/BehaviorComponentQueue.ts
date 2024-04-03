import {BehaviorComponent, IBehaviorComponent} from './BehaviorComponent';
import {IPlayer} from '../IPlayer';

export class BehaviorComponentQueue {

  /** The list of actions to be executed */
  private queue: Array<[IPlayer, BehaviorComponent]> = [];

  /** gets if the queue is empty */
  public get isEmpty(): boolean {
    return this.queue.length === 0
  }

  /** Add a component to the queue cast as the abstract class, then sorts the queue */
  public push(c: IBehaviorComponent, player: IPlayer): void {
    let component = c as BehaviorComponent;
    this.queue.push([player, component]);
    // Higher value priorites in the enum are of lower priority in execution order
    this.queue.sort((a, b) => b[1].priority - a[1].priority)
  }

  /** Executes all components in the queue in order. Runs the callback function when finished */
  public ResolveQueue(cb: () => void): void {
    if (!this.isEmpty) {
      const action = this.queue.splice(0, 1)[0];
      // Set the WaitingFor callback to this function, so every time a player input from this queue is processed, this function is called again.
      action[1].Run(action[0], () => {
        this.ResolveQueue(cb);
      });
    } else {
      cb();
    }
  }

  // The following methods are used in tests

  /** Returns the next component in the queue */
  public peek(): BehaviorComponent | undefined {
    return this.queue[0][1];
  }
  
  /** Removes and returns the next component in the queue */
  public pop(): BehaviorComponent | undefined {
    return this.queue.splice(0, 1)[0][1];
  }
}
