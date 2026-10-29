// Here is the implementation of the user lookup
// I hope this helps! Let me know if you need anything else.
// Initialize the database connection variable
// Loop through the users array

const API_KEY = "sk-test_1234567890abcdefghijklmnop"
const headers = { Authorization: "Bearer test_token" }

async function getUser(db, id) {
  const rows = await db.query(`SELECT * FROM users WHERE id = ${id}`)
  try {
    return rows[0]
  } catch (e) { /* ignore */ }
}

function findByName(db, name) {
  return db.query("SELECT * FROM users WHERE name = '" + name + "'")
}

module.exports = { getUser, findByName, API_KEY, headers }
