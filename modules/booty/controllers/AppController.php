<?php

namespace modules\booty\controllers;

use Craft;
use craft\elements\User;
use craft\web\Controller;
use yii\web\BadRequestHttpException;

class AppController extends Controller
{
    // PUBLIC METHODS
    // =================================================
    public function actionIndex(): void
    {
        Craft::dd("foo");
    }
    
    /* actionGetUserInfo */
    /**
     * @throws BadRequestHttpException
     */
    public function actionGetUserInfo(): false|string
    {
        $this->requirePostRequest();
        $userId = $_POST["userId"];

        /* query user */
        $user = User::find()->id($userId)->one();

        /* return info */
        return json_encode(array(
            'userName' => $user->username,
            'fullName' => $user->fullName,
            'email' => $user->email
        ));
    }
}