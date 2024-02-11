let map = new Map();
map.set ('Name','Dima');
map.set('Age', 18);
map.set('Region', 'Moscow' );
for (name of map.keys()) {
    console.log(`Ключ- ${name}`, )
}
for (let color  of map.values()) {

    console.log(`Значение- ${color}`);

}