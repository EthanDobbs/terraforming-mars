import {BehaviorComponent, IBehaviorComponent} from './BehaviorComponent';
import {IPlayer} from '../IPlayer';

export class DeferredActionsQueue {

  /** The list of actions to be executed */
  private queue: Array<[IPlayer, BehaviorComponent]> = [];

  /** gets if the queue is empty */
  public get QueueHasActions(): boolean {
    return this.queue.length > 0
  }

  /** Add a component to the queue cast as the abstract class, then sorts the queue */
  public push(c: IBehaviorComponent, player: IPlayer): void {
    let component = c as BehaviorComponent;
    this.queue.push([player, component]);
    // Higher value priorites in the enum are of lower priority in execution order
    this.queue.sort((a, b) => b[1].priority - a[1].priority)
  }

  public ResolveQueue(): void {
    while (this.queue.length > 0) {
      this.run(this.queue[0])
    }
  }

  public run(c: [IPlayer, BehaviorComponent]): void {
    const player = c[0];
    const component = c[1];

    const input = component.Execute(player);
    if (input) player.setWaitingFor(input);
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
