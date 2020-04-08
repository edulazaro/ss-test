const { Router } = require('express')
const gameRoutes = require('./gameRoutes.js');

/**
 * Class to manage routes
 */
class RouteManager
{
    /**
     * Constructor
     *
     * @var {Object} app The app class instance
     * @constructor
     */
    constructor(app)
    {
        this.router = Router();
        this.app = app;
    }

    /**
     * Configure route files
     *
     * @var {Object} app The app class instance
     * @return {void}
     */
    config ()
    {
        this.app.use('/api', gameRoutes);

        this.router.use(function(req, res) {
            res.status(404).json({
                error: true,
                message: 'Not Found'
            });
        });

        this.app.use('/api', this.router);
    }
}

module.exports = RouteManager;