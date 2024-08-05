export type BehaviorStepCallback = (bullet: Bullet, deltaTime: number) => void

export interface Bullet {
	behavior: Behavior
	position: Vector3
	direction: Vector3
	raycastParams: RaycastParams | undefined
	distanceTraveled: number
	raycastResults: RaycastResult[]
	/** the desired framerate which you want the bullet to move at, by default the behavior's desired framerate (you can modify this) */
	desiredFramerate: number
	/** the bullet's last resumption step */
	lastTick: number
	/** the current RaycastResult, set every frame by flashcast */
	touched: RaycastResult | undefined
	/** empty table for state */
	data: object
	/** moves the bullet, raycasting from the position to the goal */
	move(position: Vector3): void
	/** stops the bullet */
	stop(): void
	/** gets whether or not the bullet has been stopped */
	isStopped(): boolean
}

export interface Behavior{
	readonly desiredFramerate: number
	/** sets a desired framerate for the behavior */
	setDesiredFramerate(desiredFramerate:number): this
	/** adds a step callback scheduled to run before moving the bullet */
	beforeStep(callback: BehaviorStepCallback): this
	/** adds a step callback scheduled to run after moving the bullet */
	afterStep(callback: BehaviorStepCallback): this
}

export type FlashcastOptions = {
	worldRoot?: WorldRoot,
	event?: RBXScriptSignal
}

/** creates a new behavior */
export const createBehavior: () => Behavior

export class Flashcast {
	/** creates a new flashcast instance */
	constructor(options?: FlashcastOptions)
	/** gets every bullet in the instance */
	getBullets(): Bullet[]
	/** spawns a bullet with a behavior */
	spawnBullet(behavior: Behavior, origin: Vector3, direction: Vector3, raycastParams?: RaycastParams): Bullet
	/** advances a bullet by one step
	 * 
	 * calling this method will not update the bullet's lastTick property
	 */
	stepBullet(bullet: Bullet, deltaTime: number): void
	/** used internally to advance every bullet by one step */
	step(): void
	/** clears all bullets in the instance */
	clear(): void
	/** enables the instance to be garbage collected (also clears all bullets) */
	destroy(): void
}
