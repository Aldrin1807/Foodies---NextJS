import sql from 'better-sqlite3';
const db = sql('meals.db');

export async function getMeals() {
    try{
        await new Promise(resolve => setTimeout(resolve, 1000));
        return db.prepare('SELECT * FROM meals').all();
    }catch(err){
        throw new Error('Failed to fetch meals')
    }
}

export function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}