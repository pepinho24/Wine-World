/* globals module */

module.exports = function(db) {
    const AUTH_KEY_LENGTH = 60,
        AUTH_KEY_CHARS = "qwertyuiopasdfghjklzxcvbnmWERTYUIOPASDFGHJKLZXCVBNM";

    function generateAuthKey(uniquePart) {
        let token = uniquePart,
            index;

        while (token.length < AUTH_KEY_LENGTH) {
            index = Math.floor(Math.random() * AUTH_KEY_CHARS.length);
            token += AUTH_KEY_CHARS[index];
        }

        return token;
    }

    function get(req, res) {
        let user = req.user;
        if (!user) {
            return res.status(401)
                .send("Unauthorized user!");
        }

        let users = db("users")
            .map(u => {
                return {
                    username: u.username,
                    id: u.id
                };
            });

        return res.send({
            result: users
        });
    }

    function post(req, res) {
        let user = req.body;
        if (!user || typeof user.username !== "string" || typeof user.password !== "string") {
            return res.status(400)
                .send("Invalid user");
        }

        let dbUser = db("users").find({
            usernameToLower: user.username.toLowerCase()
        });

        if (dbUser) {
            return res.status(400)
                .send("Duplicated user");
        }
        user.usernameToLower = user.username.toLowerCase();
        db("users").insert(user);

        return res.status(201)
            .send({
                result: {
                    username: user.username
                }
            });
    }

    function put(req, res) {
        let reqUser = req.body;
        let user = db("users").find({
            usernameToLower: reqUser.username.toLowerCase()
        });
        if (!user || user.password !== reqUser.password) {
            return res.status(404)
                .send("Invalid username or password");
        }

        if (!user.token) {
            user.token = generateAuthKey(user.id);
            db.save();
        }

        return res.send({
            result: {
                username: user.username,
                token: user.token
            }
        });
    }

    return {get, post, put };
};