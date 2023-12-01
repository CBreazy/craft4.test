<?php

namespace modules\booty;

use Craft;
use modules\booty\twigextensions\Craft4Extension;
use yii\base\Module as BaseModule;

/**
 * booty module
 *
 * @method static Module getInstance()
 */
class Module extends BaseModule
{
    // PUBLIC PROPERTIES
    // =================================================
    public static Module $plugin;

    public function init(): void
    {
        // Defer most setup tasks until Craft is fully initialized
        Craft::$app->onInit(function() {

            self::$plugin = $this;

            // Define a custom alias named after the namespace
            Craft::setAlias('@modules/booty', __DIR__);

            $this->_registerTwigExtensions();

            // Set the controllerNamespace based on whether this is a console or web request
            if (Craft::$app->request->isConsoleRequest) {
                $this->controllerNamespace = 'modules\\booty\\console\\controllers';
            } else {
                $this->controllerNamespace = 'modules\\booty\\controllers';
            }
        });

        /* TEST LOG */
//      Module::$plugin->log(__METHOD__, "foo", "_awesomeness.json");
    }

    // PRIVATE METHODS
    // =================================================
    private function _registerTwigExtensions(): void
    {
        $extension = new Craft4Extension();
        Craft::$app->getView()->registerTwigExtension($extension);
    }
}
