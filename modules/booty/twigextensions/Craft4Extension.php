<?php

namespace modules\booty\twigextensions;

use Craft;
use craft\elements\User;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class Craft4Extension extends AbstractExtension
{
    // PUBLIC PROPERTIES
    // =================================================

    // PUBLIC METHODS
    // =================================================
    /* getFunctions */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('dd', [$this, 'dd']),
            new TwigFunction('getUserInfo', [$this, 'getUserInfo'])
        ];
    }

    /* getUserInfo */
    public function getUserInfo(string $userId): array
    {
        /* query user */
        $user = User::find()->id($userId)->one();

        /* return info */
        return array(
            'userName' => $user->username,
            'fullName' => $user->fullName,
            'email' => $user->email
        );
    }
}