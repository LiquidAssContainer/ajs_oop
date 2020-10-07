import {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
} from '../app'; // наверное, не самым красивым образом написанные тесты

test('Wrong parameters errors', () => {
  expect(
    () => new Bowman('Женёк', 'Bawman'), // wrong type in parameters
  ).toThrow(Error('Неверные входные параметры'));

  expect(
    () => new Bowman('Женёк', 'Zombie'), // different types
  ).toThrow(Error('Неверные входные параметры'));

  expect(
    () => new Zombie('а', 'Zombie'), // too short name
  ).toThrow(Error('Неверные входные параметры'));

  expect(
    () => new Undead('Александрит', 'Undead'), // too long name
  ).toThrow(Error('Неверные входные параметры'));
});

test('General character test', () => {
  const character = new Zombie('Женёк', 'Zombie');
  expect(character.name).toBe('Женёк');
  expect(character.type).toBe('Zombie');
  expect(character.health).toBe(100);
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
  expect(character.level).toBe(1);
});

test('Bowman', () => {
  const character = new Bowman('Женёк', 'Bowman');
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});

test('Zombie', () => {
  const character = new Zombie('Женёк', 'Zombie');
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
});

test('Swordsman', () => {
  const character = new Swordsman('Женёк', 'Swordsman');
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
});

test('Magician', () => {
  const character = new Magician('Женёк', 'Magician');
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});

test('Daemon', () => {
  const character = new Daemon('Женёк', 'Daemon');
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});

test('Undead', () => {
  const character = new Undead('Женёк', 'Undead');
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});

test('Damage 60 points', () => {
  const character = new Undead('Женёк', 'Undead');
  character.damage(60);
  expect(character.health).toBe(55);
});

test('Damage 10000 points', () => {
  const character = new Undead('Женёк', 'Undead');
  character.damage(10000);
  expect(character.health).toBe(0);
});

test('Level up twice', () => {
  const character = new Undead('Женёк', 'Undead');
  character.damage(60);
  character.levelUp();

  expect(character.health).toBe(100);
  expect(character.attack).toBe(30);
  expect(character.defence).toBe(30);

  character.levelUp();

  expect(character.attack).toBe(36);
  expect(character.defence).toBe(36);
});

test('Level up being dead', () => {
  function levelUpDeadFn() {
    const character = new Undead('Женёк', 'Undead');
    character.damage(1000);
    character.levelUp();
  }

  expect(levelUpDeadFn).toThrow(Error('Так вы же умерли!'));
});
