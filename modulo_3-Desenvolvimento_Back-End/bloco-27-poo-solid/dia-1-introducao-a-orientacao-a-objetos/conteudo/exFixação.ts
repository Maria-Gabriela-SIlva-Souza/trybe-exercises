class TV {

  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor( _brand: string, _size: number, _resolution: string, _connections: string[]) {
    this._brand = _brand;
    this._size = _size;
    this._resolution = _resolution;
    this._connections = _connections;
  }

  turnOn():void {
    console.log(`
    _brand: ${this._brand};
    _size: ${this._size};
    _resolution: ${this._resolution};
    _connections: ${this._connections};
    `);
  }

  get connectedTo(): string | undefined {
    return this._connectedTo as string;
  }

  set connectedTo(newValue: string) {
    if (newValue === 'Positivo') {
      this._connectedTo = newValue;
      console.log(this._connectedTo);
    }
    console.log('Sorry, connection unavailable!');
  }
}

const tvNew = new TV('Philips', 25, 'FullHd', ['HDMI', 'AVG', 'Bluetooth']);

tvNew.turnOn()

tvNew.connectedTo = 'Wi-Fi';

console.log('Connected to: ', tvNew.connectedTo);
