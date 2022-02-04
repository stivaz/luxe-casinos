<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf68135513ca42c68c04081b0863428ae
{
    public static $files = array (
        '1dcdacd755a1604b300d3ccfdeb7255f' => __DIR__ . '/..' . '/akeeba/awf/src/Utils/helpers.php',
    );

    public static $prefixLengthsPsr4 = array (
        'J' => 
        array (
            'JchOptimize\\' => 12,
        ),
        'C' => 
        array (
            'Composer\\CaBundle\\' => 18,
            'CodeAlfa\\RegexTokenizer\\' => 24,
            'CodeAlfa\\Minify\\' => 16,
        ),
        'A' => 
        array (
            'Awf\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'JchOptimize\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Composer\\CaBundle\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/ca-bundle/src',
        ),
        'CodeAlfa\\RegexTokenizer\\' => 
        array (
            0 => __DIR__ . '/..' . '/codealfa/regextokenizer/src',
        ),
        'CodeAlfa\\Minify\\' => 
        array (
            0 => __DIR__ . '/..' . '/codealfa/minify/src',
        ),
        'Awf\\' => 
        array (
            0 => __DIR__ . '/..' . '/akeeba/awf/src',
        ),
    );

    public static $classMap = array (
        'Awf\\Application\\Application' => __DIR__ . '/..' . '/akeeba/awf/src/Application/Application.php',
        'Awf\\Application\\Cli' => __DIR__ . '/..' . '/akeeba/awf/src/Application/Cli.php',
        'Awf\\Application\\Configuration' => __DIR__ . '/..' . '/akeeba/awf/src/Application/Configuration.php',
        'Awf\\Application\\TransparentAuthentication' => __DIR__ . '/..' . '/akeeba/awf/src/Application/TransparentAuthentication.php',
        'Awf\\Autoloader\\Autoloader' => __DIR__ . '/..' . '/akeeba/awf/src/Autoloader/Autoloader.php',
        'Awf\\Container\\Container' => __DIR__ . '/..' . '/akeeba/awf/src/Container/Container.php',
        'Awf\\Database\\DatabaseInterface' => __DIR__ . '/..' . '/akeeba/awf/src/Database/DatabaseInterface.php',
        'Awf\\Database\\Driver' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Driver.php',
        'Awf\\Database\\Driver\\Mysql' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Driver/Mysql.php',
        'Awf\\Database\\Driver\\Mysqli' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Driver/Mysqli.php',
        'Awf\\Database\\Driver\\None' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Driver/None.php',
        'Awf\\Database\\Driver\\Pdo' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Driver/Pdo.php',
        'Awf\\Database\\Driver\\Pdomysql' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Driver/Pdomysql.php',
        'Awf\\Database\\Driver\\Pgsql' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Driver/Pgsql.php',
        'Awf\\Database\\Driver\\Postgresql' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Driver/Postgresql.php',
        'Awf\\Database\\Driver\\Sqlazure' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Driver/Sqlazure.php',
        'Awf\\Database\\Driver\\Sqlite' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Driver/Sqlite.php',
        'Awf\\Database\\Driver\\Sqlsrv' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Driver/Sqlsrv.php',
        'Awf\\Database\\Installer' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Installer.php',
        'Awf\\Database\\Query' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Query.php',
        'Awf\\Database\\QueryElement' => __DIR__ . '/..' . '/akeeba/awf/src/Database/QueryElement.php',
        'Awf\\Database\\QueryLimitable' => __DIR__ . '/..' . '/akeeba/awf/src/Database/QueryLimitable.php',
        'Awf\\Database\\QueryPreparable' => __DIR__ . '/..' . '/akeeba/awf/src/Database/QueryPreparable.php',
        'Awf\\Database\\Query\\Mysql' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Query/Mysql.php',
        'Awf\\Database\\Query\\Mysqli' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Query/Mysqli.php',
        'Awf\\Database\\Query\\Pdo' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Query/Pdo.php',
        'Awf\\Database\\Query\\Pgsql' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Query/Pgsql.php',
        'Awf\\Database\\Query\\Postgresql' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Query/Postgresql.php',
        'Awf\\Database\\Query\\Sqlazure' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Query/Sqlazure.php',
        'Awf\\Database\\Query\\Sqlite' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Query/Sqlite.php',
        'Awf\\Database\\Query\\Sqlsrv' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Query/Sqlsrv.php',
        'Awf\\Database\\Restore' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Restore.php',
        'Awf\\Database\\Restore\\Mysql' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Restore/Mysql.php',
        'Awf\\Database\\Restore\\Mysqli' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Restore/Mysqli.php',
        'Awf\\Database\\Restore\\Pgsql' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Restore/Pgsql.php',
        'Awf\\Database\\Restore\\Postgresql' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Restore/Postgresql.php',
        'Awf\\Database\\Restore\\Sqlazure' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Restore/Sqlazure.php',
        'Awf\\Database\\Restore\\Sqlsrv' => __DIR__ . '/..' . '/akeeba/awf/src/Database/Restore/Sqlsrv.php',
        'Awf\\Date\\Date' => __DIR__ . '/..' . '/akeeba/awf/src/Date/Date.php',
        'Awf\\Dispatcher\\Dispatcher' => __DIR__ . '/..' . '/akeeba/awf/src/Dispatcher/Dispatcher.php',
        'Awf\\Document\\Csv' => __DIR__ . '/..' . '/akeeba/awf/src/Document/Csv.php',
        'Awf\\Document\\Document' => __DIR__ . '/..' . '/akeeba/awf/src/Document/Document.php',
        'Awf\\Document\\Html' => __DIR__ . '/..' . '/akeeba/awf/src/Document/Html.php',
        'Awf\\Document\\Json' => __DIR__ . '/..' . '/akeeba/awf/src/Document/Json.php',
        'Awf\\Document\\Menu\\Item' => __DIR__ . '/..' . '/akeeba/awf/src/Document/Menu/Item.php',
        'Awf\\Document\\Menu\\MenuManager' => __DIR__ . '/..' . '/akeeba/awf/src/Document/Menu/MenuManager.php',
        'Awf\\Document\\Raw' => __DIR__ . '/..' . '/akeeba/awf/src/Document/Raw.php',
        'Awf\\Document\\Toolbar\\Button' => __DIR__ . '/..' . '/akeeba/awf/src/Document/Toolbar/Button.php',
        'Awf\\Document\\Toolbar\\Toolbar' => __DIR__ . '/..' . '/akeeba/awf/src/Document/Toolbar/Toolbar.php',
        'Awf\\Download\\Adapter\\AbstractAdapter' => __DIR__ . '/..' . '/akeeba/awf/src/Download/Adapter/AbstractAdapter.php',
        'Awf\\Download\\Adapter\\Curl' => __DIR__ . '/..' . '/akeeba/awf/src/Download/Adapter/Curl.php',
        'Awf\\Download\\Adapter\\Fopen' => __DIR__ . '/..' . '/akeeba/awf/src/Download/Adapter/Fopen.php',
        'Awf\\Download\\Download' => __DIR__ . '/..' . '/akeeba/awf/src/Download/Download.php',
        'Awf\\Download\\DownloadInterface' => __DIR__ . '/..' . '/akeeba/awf/src/Download/DownloadInterface.php',
        'Awf\\Encrypt\\Aes' => __DIR__ . '/..' . '/akeeba/awf/src/Encrypt/Aes.php',
        'Awf\\Encrypt\\AesAdapter\\AbstractAdapter' => __DIR__ . '/..' . '/akeeba/awf/src/Encrypt/AesAdapter/AbstractAdapter.php',
        'Awf\\Encrypt\\AesAdapter\\AdapterInterface' => __DIR__ . '/..' . '/akeeba/awf/src/Encrypt/AesAdapter/AdapterInterface.php',
        'Awf\\Encrypt\\AesAdapter\\Mcrypt' => __DIR__ . '/..' . '/akeeba/awf/src/Encrypt/AesAdapter/Mcrypt.php',
        'Awf\\Encrypt\\AesAdapter\\OpenSSL' => __DIR__ . '/..' . '/akeeba/awf/src/Encrypt/AesAdapter/OpenSSL.php',
        'Awf\\Encrypt\\Base32' => __DIR__ . '/..' . '/akeeba/awf/src/Encrypt/Base32.php',
        'Awf\\Encrypt\\Totp' => __DIR__ . '/..' . '/akeeba/awf/src/Encrypt/Totp.php',
        'Awf\\Event\\Dispatcher' => __DIR__ . '/..' . '/akeeba/awf/src/Event/Dispatcher.php',
        'Awf\\Event\\Observable' => __DIR__ . '/..' . '/akeeba/awf/src/Event/Observable.php',
        'Awf\\Event\\Observer' => __DIR__ . '/..' . '/akeeba/awf/src/Event/Observer.php',
        'Awf\\Exception\\App' => __DIR__ . '/..' . '/akeeba/awf/src/Exception/App.php',
        'Awf\\Exception\\Dispatch' => __DIR__ . '/..' . '/akeeba/awf/src/Exception/Dispatch.php',
        'Awf\\Exception\\Generic' => __DIR__ . '/..' . '/akeeba/awf/src/Exception/Generic.php',
        'Awf\\Filesystem\\Factory' => __DIR__ . '/..' . '/akeeba/awf/src/Filesystem/Factory.php',
        'Awf\\Filesystem\\File' => __DIR__ . '/..' . '/akeeba/awf/src/Filesystem/File.php',
        'Awf\\Filesystem\\FilesystemInterface' => __DIR__ . '/..' . '/akeeba/awf/src/Filesystem/FilesystemInterface.php',
        'Awf\\Filesystem\\Ftp' => __DIR__ . '/..' . '/akeeba/awf/src/Filesystem/Ftp.php',
        'Awf\\Filesystem\\Hybrid' => __DIR__ . '/..' . '/akeeba/awf/src/Filesystem/Hybrid.php',
        'Awf\\Filesystem\\Sftp' => __DIR__ . '/..' . '/akeeba/awf/src/Filesystem/Sftp.php',
        'Awf\\Hal\\Document' => __DIR__ . '/..' . '/akeeba/awf/src/Hal/Document.php',
        'Awf\\Hal\\Link' => __DIR__ . '/..' . '/akeeba/awf/src/Hal/Link.php',
        'Awf\\Hal\\Links' => __DIR__ . '/..' . '/akeeba/awf/src/Hal/Links.php',
        'Awf\\Hal\\Render\\Json' => __DIR__ . '/..' . '/akeeba/awf/src/Hal/Render/Json.php',
        'Awf\\Hal\\Render\\RenderInterface' => __DIR__ . '/..' . '/akeeba/awf/src/Hal/Render/RenderInterface.php',
        'Awf\\Html\\Accordion' => __DIR__ . '/..' . '/akeeba/awf/src/Html/Accordion.php',
        'Awf\\Html\\Behaviour' => __DIR__ . '/..' . '/akeeba/awf/src/Html/Behaviour.php',
        'Awf\\Html\\Grid' => __DIR__ . '/..' . '/akeeba/awf/src/Html/Grid.php',
        'Awf\\Html\\Html' => __DIR__ . '/..' . '/akeeba/awf/src/Html/Html.php',
        'Awf\\Html\\Select' => __DIR__ . '/..' . '/akeeba/awf/src/Html/Select.php',
        'Awf\\Html\\Tabs' => __DIR__ . '/..' . '/akeeba/awf/src/Html/Tabs.php',
        'Awf\\Inflector\\Inflector' => __DIR__ . '/..' . '/akeeba/awf/src/Inflector/Inflector.php',
        'Awf\\Input\\Cli' => __DIR__ . '/..' . '/akeeba/awf/src/Input/Cli.php',
        'Awf\\Input\\Filter' => __DIR__ . '/..' . '/akeeba/awf/src/Input/Filter.php',
        'Awf\\Input\\Input' => __DIR__ . '/..' . '/akeeba/awf/src/Input/Input.php',
        'Awf\\Mailer\\Mailer' => __DIR__ . '/..' . '/akeeba/awf/src/Mailer/Mailer.php',
        'Awf\\Mvc\\Compiler\\Blade' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/Compiler/Blade.php',
        'Awf\\Mvc\\Compiler\\CompilerInterface' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/Compiler/CompilerInterface.php',
        'Awf\\Mvc\\Controller' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/Controller.php',
        'Awf\\Mvc\\DataController' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataController.php',
        'Awf\\Mvc\\DataModel' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel.php',
        'Awf\\Mvc\\DataModel\\Behaviour\\Filters' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Behaviour/Filters.php',
        'Awf\\Mvc\\DataModel\\Behaviour\\RelationFilters' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Behaviour/RelationFilters.php',
        'Awf\\Mvc\\DataModel\\Collection' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Collection.php',
        'Awf\\Mvc\\DataModel\\Exception\\BaseException' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Exception/BaseException.php',
        'Awf\\Mvc\\DataModel\\Exception\\InvalidSearchMethod' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Exception/InvalidSearchMethod.php',
        'Awf\\Mvc\\DataModel\\Exception\\NoTableColumns' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Exception/NoTableColumns.php',
        'Awf\\Mvc\\DataModel\\Exception\\RecordNotLoaded' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Exception/RecordNotLoaded.php',
        'Awf\\Mvc\\DataModel\\Exception\\SpecialColumnMissing' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Exception/SpecialColumnMissing.php',
        'Awf\\Mvc\\DataModel\\Filter\\AbstractFilter' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Filter/AbstractFilter.php',
        'Awf\\Mvc\\DataModel\\Filter\\Boolean' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Filter/Boolean.php',
        'Awf\\Mvc\\DataModel\\Filter\\Date' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Filter/Date.php',
        'Awf\\Mvc\\DataModel\\Filter\\Number' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Filter/Number.php',
        'Awf\\Mvc\\DataModel\\Filter\\Relation' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Filter/Relation.php',
        'Awf\\Mvc\\DataModel\\Filter\\Text' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Filter/Text.php',
        'Awf\\Mvc\\DataModel\\Relation' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Relation.php',
        'Awf\\Mvc\\DataModel\\RelationManager' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/RelationManager.php',
        'Awf\\Mvc\\DataModel\\Relation\\BelongsTo' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Relation/BelongsTo.php',
        'Awf\\Mvc\\DataModel\\Relation\\BelongsToMany' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Relation/BelongsToMany.php',
        'Awf\\Mvc\\DataModel\\Relation\\Exception\\ForeignModelNotFound' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Relation/Exception/ForeignModelNotFound.php',
        'Awf\\Mvc\\DataModel\\Relation\\Exception\\NewNotSupported' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Relation/Exception/NewNotSupported.php',
        'Awf\\Mvc\\DataModel\\Relation\\Exception\\PivotTableNotFound' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Relation/Exception/PivotTableNotFound.php',
        'Awf\\Mvc\\DataModel\\Relation\\Exception\\RelationNotFound' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Relation/Exception/RelationNotFound.php',
        'Awf\\Mvc\\DataModel\\Relation\\Exception\\RelationTypeNotFound' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Relation/Exception/RelationTypeNotFound.php',
        'Awf\\Mvc\\DataModel\\Relation\\Exception\\SaveNotSupported' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Relation/Exception/SaveNotSupported.php',
        'Awf\\Mvc\\DataModel\\Relation\\HasMany' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Relation/HasMany.php',
        'Awf\\Mvc\\DataModel\\Relation\\HasOne' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataModel/Relation/HasOne.php',
        'Awf\\Mvc\\DataView\\Csv' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataView/Csv.php',
        'Awf\\Mvc\\DataView\\Html' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataView/Html.php',
        'Awf\\Mvc\\DataView\\Json' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataView/Json.php',
        'Awf\\Mvc\\DataView\\Raw' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/DataView/Raw.php',
        'Awf\\Mvc\\Engine\\AbstractEngine' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/Engine/AbstractEngine.php',
        'Awf\\Mvc\\Engine\\BladeEngine' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/Engine/BladeEngine.php',
        'Awf\\Mvc\\Engine\\CompilingEngine' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/Engine/CompilingEngine.php',
        'Awf\\Mvc\\Engine\\EngineInterface' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/Engine/EngineInterface.php',
        'Awf\\Mvc\\Engine\\PhpEngine' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/Engine/PhpEngine.php',
        'Awf\\Mvc\\Model' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/Model.php',
        'Awf\\Mvc\\TreeModel' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/TreeModel.php',
        'Awf\\Mvc\\View' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/View.php',
        'Awf\\Mvc\\ViewTemplateFinder' => __DIR__ . '/..' . '/akeeba/awf/src/Mvc/ViewTemplateFinder.php',
        'Awf\\Pagination\\Object' => __DIR__ . '/..' . '/akeeba/awf/src/Pagination/Object.php',
        'Awf\\Pagination\\Pagination' => __DIR__ . '/..' . '/akeeba/awf/src/Pagination/Pagination.php',
        'Awf\\Pagination\\PaginationObject' => __DIR__ . '/..' . '/akeeba/awf/src/Pagination/PaginationObject.php',
        'Awf\\Pimple\\Pimple' => __DIR__ . '/..' . '/akeeba/awf/src/Pimple/Pimple.php',
        'Awf\\Pimple\\ServiceProviderInterface' => __DIR__ . '/..' . '/akeeba/awf/src/Pimple/ServiceProviderInterface.php',
        'Awf\\Platform\\Joomla\\Application\\Application' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Application/Application.php',
        'Awf\\Platform\\Joomla\\Application\\Configuration' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Application/Configuration.php',
        'Awf\\Platform\\Joomla\\Application\\Observer\\ControllerAcl' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Application/Observer/ControllerAcl.php',
        'Awf\\Platform\\Joomla\\Application\\Observer\\ViewAlternatePaths' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Application/Observer/ViewAlternatePaths.php',
        'Awf\\Platform\\Joomla\\Container\\Container' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Container/Container.php',
        'Awf\\Platform\\Joomla\\Event\\Dispatcher' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Event/Dispatcher.php',
        'Awf\\Platform\\Joomla\\Helper\\Cleaner' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Helper/Cleaner.php',
        'Awf\\Platform\\Joomla\\Helper\\ComponentConfig' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Helper/ComponentConfig.php',
        'Awf\\Platform\\Joomla\\Helper\\Helper' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Helper/Helper.php',
        'Awf\\Platform\\Joomla\\Router\\Router' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Router/Router.php',
        'Awf\\Platform\\Joomla\\Session\\CsrfToken' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Session/CsrfToken.php',
        'Awf\\Platform\\Joomla\\Session\\CsrfTokenFactory' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Session/CsrfTokenFactory.php',
        'Awf\\Platform\\Joomla\\Session\\Manager' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Session/Manager.php',
        'Awf\\Platform\\Joomla\\Session\\Segment' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Session/Segment.php',
        'Awf\\Platform\\Joomla\\Session\\SegmentFactory' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Session/SegmentFactory.php',
        'Awf\\Platform\\Joomla\\Update\\Extension' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Update/Extension.php',
        'Awf\\Platform\\Joomla\\Update\\Model' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/Update/Model.php',
        'Awf\\Platform\\Joomla\\User\\Manager' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/User/Manager.php',
        'Awf\\Platform\\Joomla\\User\\User' => __DIR__ . '/..' . '/akeeba/awf/src/Platform/Joomla/User/User.php',
        'Awf\\Registry\\AbstractRegistryFormat' => __DIR__ . '/..' . '/akeeba/awf/src/Registry/AbstractRegistryFormat.php',
        'Awf\\Registry\\Format\\Ini' => __DIR__ . '/..' . '/akeeba/awf/src/Registry/Format/Ini.php',
        'Awf\\Registry\\Format\\Json' => __DIR__ . '/..' . '/akeeba/awf/src/Registry/Format/Json.php',
        'Awf\\Registry\\Format\\Php' => __DIR__ . '/..' . '/akeeba/awf/src/Registry/Format/Php.php',
        'Awf\\Registry\\Format\\Xml' => __DIR__ . '/..' . '/akeeba/awf/src/Registry/Format/Xml.php',
        'Awf\\Registry\\Registry' => __DIR__ . '/..' . '/akeeba/awf/src/Registry/Registry.php',
        'Awf\\Router\\Router' => __DIR__ . '/..' . '/akeeba/awf/src/Router/Router.php',
        'Awf\\Router\\Rule' => __DIR__ . '/..' . '/akeeba/awf/src/Router/Rule.php',
        'Awf\\Session\\CsrfToken' => __DIR__ . '/..' . '/akeeba/awf/src/Session/CsrfToken.php',
        'Awf\\Session\\CsrfTokenFactory' => __DIR__ . '/..' . '/akeeba/awf/src/Session/CsrfTokenFactory.php',
        'Awf\\Session\\Exception' => __DIR__ . '/..' . '/akeeba/awf/src/Session/Exception.php',
        'Awf\\Session\\Manager' => __DIR__ . '/..' . '/akeeba/awf/src/Session/Manager.php',
        'Awf\\Session\\Segment' => __DIR__ . '/..' . '/akeeba/awf/src/Session/Segment.php',
        'Awf\\Session\\SegmentFactory' => __DIR__ . '/..' . '/akeeba/awf/src/Session/SegmentFactory.php',
        'Awf\\Session\\SegmentInterface' => __DIR__ . '/..' . '/akeeba/awf/src/Session/SegmentInterface.php',
        'Awf\\Text\\Text' => __DIR__ . '/..' . '/akeeba/awf/src/Text/Text.php',
        'Awf\\Timer\\Timer' => __DIR__ . '/..' . '/akeeba/awf/src/Timer/Timer.php',
        'Awf\\Uri\\Uri' => __DIR__ . '/..' . '/akeeba/awf/src/Uri/Uri.php',
        'Awf\\User\\Authentication' => __DIR__ . '/..' . '/akeeba/awf/src/User/Authentication.php',
        'Awf\\User\\AuthenticationInterface' => __DIR__ . '/..' . '/akeeba/awf/src/User/AuthenticationInterface.php',
        'Awf\\User\\Manager' => __DIR__ . '/..' . '/akeeba/awf/src/User/Manager.php',
        'Awf\\User\\ManagerInterface' => __DIR__ . '/..' . '/akeeba/awf/src/User/ManagerInterface.php',
        'Awf\\User\\Privilege' => __DIR__ . '/..' . '/akeeba/awf/src/User/Privilege.php',
        'Awf\\User\\PrivilegeInterface' => __DIR__ . '/..' . '/akeeba/awf/src/User/PrivilegeInterface.php',
        'Awf\\User\\User' => __DIR__ . '/..' . '/akeeba/awf/src/User/User.php',
        'Awf\\User\\UserInterface' => __DIR__ . '/..' . '/akeeba/awf/src/User/UserInterface.php',
        'Awf\\Utils\\ArrayHelper' => __DIR__ . '/..' . '/akeeba/awf/src/Utils/ArrayHelper.php',
        'Awf\\Utils\\Buffer' => __DIR__ . '/..' . '/akeeba/awf/src/Utils/Buffer.php',
        'Awf\\Utils\\Collection' => __DIR__ . '/..' . '/akeeba/awf/src/Utils/Collection.php',
        'Awf\\Utils\\Ip' => __DIR__ . '/..' . '/akeeba/awf/src/Utils/Ip.php',
        'Awf\\Utils\\ParseIni' => __DIR__ . '/..' . '/akeeba/awf/src/Utils/ParseIni.php',
        'Awf\\Utils\\Path' => __DIR__ . '/..' . '/akeeba/awf/src/Utils/Path.php',
        'Awf\\Utils\\PhpTokenizer' => __DIR__ . '/..' . '/akeeba/awf/src/Utils/PhpTokenizer.php',
        'Awf\\Utils\\StringHandling' => __DIR__ . '/..' . '/akeeba/awf/src/Utils/StringHandling.php',
        'Awf\\Utils\\Template' => __DIR__ . '/..' . '/akeeba/awf/src/Utils/Template.php',
        'Browser' => __DIR__ . '/..' . '/cbschuld/browser.php/src/Browser.php',
        'CodeAlfa\\Minify\\Base' => __DIR__ . '/..' . '/codealfa/minify/src/Base.php',
        'CodeAlfa\\Minify\\Css' => __DIR__ . '/..' . '/codealfa/minify/src/Css.php',
        'CodeAlfa\\Minify\\Html' => __DIR__ . '/..' . '/codealfa/minify/src/Html.php',
        'CodeAlfa\\Minify\\Js' => __DIR__ . '/..' . '/codealfa/minify/src/Js.php',
        'CodeAlfa\\Minify\\Json' => __DIR__ . '/..' . '/codealfa/minify/src/Json.php',
        'CodeAlfa\\RegexTokenizer\\Base' => __DIR__ . '/..' . '/codealfa/regextokenizer/src/Base.php',
        'CodeAlfa\\RegexTokenizer\\Css' => __DIR__ . '/..' . '/codealfa/regextokenizer/src/Css.php',
        'CodeAlfa\\RegexTokenizer\\Debug\\Debug' => __DIR__ . '/..' . '/codealfa/regextokenizer/src/Debug/Debug.php',
        'CodeAlfa\\RegexTokenizer\\Html' => __DIR__ . '/..' . '/codealfa/regextokenizer/src/Html.php',
        'CodeAlfa\\RegexTokenizer\\Js' => __DIR__ . '/..' . '/codealfa/regextokenizer/src/Js.php',
        'Composer\\CaBundle\\CaBundle' => __DIR__ . '/..' . '/composer/ca-bundle/src/CaBundle.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'JchOptimize\\Admin\\Application' => __DIR__ . '/../..' . '/src/Admin/Application.php',
        'JchOptimize\\Admin\\Container' => __DIR__ . '/../..' . '/src/Admin/Container.php',
        'JchOptimize\\Admin\\Controller\\Configurations' => __DIR__ . '/../..' . '/src/Admin/Controller/Configurations.php',
        'JchOptimize\\Admin\\Controller\\Configure' => __DIR__ . '/../..' . '/src/Admin/Controller/Configure.php',
        'JchOptimize\\Admin\\Controller\\Help' => __DIR__ . '/../..' . '/src/Admin/Controller/Help.php',
        'JchOptimize\\Admin\\Controller\\Main' => __DIR__ . '/../..' . '/src/Admin/Controller/Main.php',
        'JchOptimize\\Admin\\Controller\\Optimizeimages' => __DIR__ . '/../..' . '/src/Admin/Controller/Optimizeimages.php',
        'JchOptimize\\Admin\\Controller\\Utility' => __DIR__ . '/../..' . '/src/Admin/Controller/Utility.php',
        'JchOptimize\\Admin\\Dispatcher' => __DIR__ . '/../..' . '/src/Admin/Dispatcher.php',
        'JchOptimize\\Admin\\Model\\Configurations' => __DIR__ . '/../..' . '/src/Admin/Model/Configurations.php',
        'JchOptimize\\Admin\\Model\\Configure' => __DIR__ . '/../..' . '/src/Admin/Model/Configure.php',
        'JchOptimize\\Admin\\Model\\Help' => __DIR__ . '/../..' . '/src/Admin/Model/Help.php',
        'JchOptimize\\Admin\\Model\\Main' => __DIR__ . '/../..' . '/src/Admin/Model/Main.php',
        'JchOptimize\\Admin\\Model\\Optimizeimages' => __DIR__ . '/../..' . '/src/Admin/Model/Optimizeimages.php',
        'JchOptimize\\Admin\\View\\Configurations\\Html' => __DIR__ . '/../..' . '/src/Admin/View/Configurations/Html.php',
        'JchOptimize\\Admin\\View\\Help\\Html' => __DIR__ . '/../..' . '/src/Admin/View/Help/Html.php',
        'JchOptimize\\Admin\\View\\Main\\Html' => __DIR__ . '/../..' . '/src/Admin/View/Main/Html.php',
        'JchOptimize\\Admin\\View\\Optimizeimages\\Html' => __DIR__ . '/../..' . '/src/Admin/View/Optimizeimages/Html.php',
        'JchOptimize\\Core\\Admin\\Ajax\\Ajax' => __DIR__ . '/../..' . '/src/Core/Admin/Ajax/Ajax.php',
        'JchOptimize\\Core\\Admin\\Ajax\\FileTree' => __DIR__ . '/../..' . '/src/Core/Admin/Ajax/FileTree.php',
        'JchOptimize\\Core\\Admin\\Ajax\\GarbageCron' => __DIR__ . '/../..' . '/src/Core/Admin/Ajax/GarbageCron.php',
        'JchOptimize\\Core\\Admin\\Ajax\\MultiSelect' => __DIR__ . '/../..' . '/src/Core/Admin/Ajax/MultiSelect.php',
        'JchOptimize\\Core\\Admin\\Ajax\\OptimizeImage' => __DIR__ . '/../..' . '/src/Core/Admin/Ajax/OptimizeImage.php',
        'JchOptimize\\Core\\Admin\\Ajax\\SmartCombine' => __DIR__ . '/../..' . '/src/Core/Admin/Ajax/SmartCombine.php',
        'JchOptimize\\Core\\Admin\\Helper' => __DIR__ . '/../..' . '/src/Core/Admin/Helper.php',
        'JchOptimize\\Core\\Admin\\Icons' => __DIR__ . '/../..' . '/src/Core/Admin/Icons.php',
        'JchOptimize\\Core\\Admin\\ImageUploader' => __DIR__ . '/../..' . '/src/Core/Admin/ImageUploader.php',
        'JchOptimize\\Core\\Admin\\Json' => __DIR__ . '/../..' . '/src/Core/Admin/Json.php',
        'JchOptimize\\Core\\Admin\\MultiSelectItems' => __DIR__ . '/../..' . '/src/Core/Admin/MultiSelectItems.php',
        'JchOptimize\\Core\\Admin\\Tasks' => __DIR__ . '/../..' . '/src/Core/Admin/Tasks.php',
        'JchOptimize\\Core\\Browser' => __DIR__ . '/../..' . '/src/Core/Browser.php',
        'JchOptimize\\Core\\Cdn' => __DIR__ . '/../..' . '/src/Core/Cdn.php',
        'JchOptimize\\Core\\CdnDomains' => __DIR__ . '/../..' . '/src/Core/CdnDomains.php',
        'JchOptimize\\Core\\Combiner' => __DIR__ . '/../..' . '/src/Core/Combiner.php',
        'JchOptimize\\Core\\Cron' => __DIR__ . '/../..' . '/src/Core/Cron.php',
        'JchOptimize\\Core\\Css\\Callbacks\\CallbackBase' => __DIR__ . '/../..' . '/src/Core/Css/Callbacks/CallbackBase.php',
        'JchOptimize\\Core\\Css\\Callbacks\\CombineMediaQueries' => __DIR__ . '/../..' . '/src/Core/Css/Callbacks/CombineMediaQueries.php',
        'JchOptimize\\Core\\Css\\Callbacks\\CorrectUrls' => __DIR__ . '/../..' . '/src/Core/Css/Callbacks/CorrectUrls.php',
        'JchOptimize\\Core\\Css\\Callbacks\\ExtractCriticalCss' => __DIR__ . '/../..' . '/src/Core/Css/Callbacks/ExtractCriticalCss.php',
        'JchOptimize\\Core\\Css\\Callbacks\\FormatCss' => __DIR__ . '/../..' . '/src/Core/Css/Callbacks/FormatCss.php',
        'JchOptimize\\Core\\Css\\Callbacks\\HandleAtRules' => __DIR__ . '/../..' . '/src/Core/Css/Callbacks/HandleAtRules.php',
        'JchOptimize\\Core\\Css\\CssSearchObject' => __DIR__ . '/../..' . '/src/Core/Css/CssSearchObject.php',
        'JchOptimize\\Core\\Css\\Parser' => __DIR__ . '/../..' . '/src/Core/Css/Parser.php',
        'JchOptimize\\Core\\Css\\Processor' => __DIR__ . '/../..' . '/src/Core/Css/Processor.php',
        'JchOptimize\\Core\\Css\\Sprite\\CssSpriteGen' => __DIR__ . '/../..' . '/src/Core/Css/Sprite/CssSpriteGen.php',
        'JchOptimize\\Core\\Css\\Sprite\\Handlers\\Gd' => __DIR__ . '/../..' . '/src/Core/Css/Sprite/Handlers/Gd.php',
        'JchOptimize\\Core\\Css\\Sprite\\Handlers\\HandlerInterface' => __DIR__ . '/../..' . '/src/Core/Css/Sprite/Handlers/HandlerInterface.php',
        'JchOptimize\\Core\\Css\\Sprite\\Handlers\\Imagick' => __DIR__ . '/../..' . '/src/Core/Css/Sprite/Handlers/Imagick.php',
        'JchOptimize\\Core\\Css\\Sprite\\SpriteGenerator' => __DIR__ . '/../..' . '/src/Core/Css/Sprite/SpriteGenerator.php',
        'JchOptimize\\Core\\DynamicJs' => __DIR__ . '/../..' . '/src/Core/DynamicJs.php',
        'JchOptimize\\Core\\DynamicSelectors' => __DIR__ . '/../..' . '/src/Core/DynamicSelectors.php',
        'JchOptimize\\Core\\Exception' => __DIR__ . '/../..' . '/src/Core/Exception.php',
        'JchOptimize\\Core\\FileRetriever' => __DIR__ . '/../..' . '/src/Core/FileRetriever.php',
        'JchOptimize\\Core\\Fonts' => __DIR__ . '/../..' . '/src/Core/Fonts.php',
        'JchOptimize\\Core\\GoogleFonts' => __DIR__ . '/../..' . '/src/Core/GoogleFonts.php',
        'JchOptimize\\Core\\Helper' => __DIR__ . '/../..' . '/src/Core/Helper.php',
        'JchOptimize\\Core\\Html\\AsyncManager' => __DIR__ . '/../..' . '/src/Core/Html/AsyncManager.php',
        'JchOptimize\\Core\\Html\\CacheManager' => __DIR__ . '/../..' . '/src/Core/Html/CacheManager.php',
        'JchOptimize\\Core\\Html\\Callbacks\\CallbackBase' => __DIR__ . '/../..' . '/src/Core/Html/Callbacks/CallbackBase.php',
        'JchOptimize\\Core\\Html\\Callbacks\\Cdn' => __DIR__ . '/../..' . '/src/Core/Html/Callbacks/Cdn.php',
        'JchOptimize\\Core\\Html\\Callbacks\\CombineJsCss' => __DIR__ . '/../..' . '/src/Core/Html/Callbacks/CombineJsCss.php',
        'JchOptimize\\Core\\Html\\Callbacks\\LazyLoad' => __DIR__ . '/../..' . '/src/Core/Html/Callbacks/LazyLoad.php',
        'JchOptimize\\Core\\Html\\ElementObject' => __DIR__ . '/../..' . '/src/Core/Html/ElementObject.php',
        'JchOptimize\\Core\\Html\\ExcludeException' => __DIR__ . '/../..' . '/src/Core/Html/ExcludeException.php',
        'JchOptimize\\Core\\Html\\FilesManager' => __DIR__ . '/../..' . '/src/Core/Html/FilesManager.php',
        'JchOptimize\\Core\\Html\\LinkBuilder' => __DIR__ . '/../..' . '/src/Core/Html/LinkBuilder.php',
        'JchOptimize\\Core\\Html\\Parser' => __DIR__ . '/../..' . '/src/Core/Html/Parser.php',
        'JchOptimize\\Core\\Html\\Processor' => __DIR__ . '/../..' . '/src/Core/Html/Processor.php',
        'JchOptimize\\Core\\Http2' => __DIR__ . '/../..' . '/src/Core/Http2.php',
        'JchOptimize\\Core\\Http2Excludes' => __DIR__ . '/../..' . '/src/Core/Http2Excludes.php',
        'JchOptimize\\Core\\Interfaces\\Cache' => __DIR__ . '/../..' . '/src/Core/Interfaces/Cache.php',
        'JchOptimize\\Core\\Interfaces\\Excludes' => __DIR__ . '/../..' . '/src/Core/Interfaces/Excludes.php',
        'JchOptimize\\Core\\Interfaces\\FileSystem' => __DIR__ . '/../..' . '/src/Core/Interfaces/FileSystem.php',
        'JchOptimize\\Core\\Interfaces\\Html' => __DIR__ . '/../..' . '/src/Core/Interfaces/Html.php',
        'JchOptimize\\Core\\Interfaces\\Http' => __DIR__ . '/../..' . '/src/Core/Interfaces/Http.php',
        'JchOptimize\\Core\\Interfaces\\Paths' => __DIR__ . '/../..' . '/src/Core/Interfaces/Paths.php',
        'JchOptimize\\Core\\Interfaces\\Plugin' => __DIR__ . '/../..' . '/src/Core/Interfaces/Plugin.php',
        'JchOptimize\\Core\\Interfaces\\Profiler' => __DIR__ . '/../..' . '/src/Core/Interfaces/Profiler.php',
        'JchOptimize\\Core\\Interfaces\\Settings' => __DIR__ . '/../..' . '/src/Core/Interfaces/Settings.php',
        'JchOptimize\\Core\\Interfaces\\Uri' => __DIR__ . '/../..' . '/src/Core/Interfaces/Uri.php',
        'JchOptimize\\Core\\Interfaces\\Utility' => __DIR__ . '/../..' . '/src/Core/Interfaces/Utility.php',
        'JchOptimize\\Core\\LazyLoadExtended' => __DIR__ . '/../..' . '/src/Core/LazyLoadExtended.php',
        'JchOptimize\\Core\\Logger' => __DIR__ . '/../..' . '/src/Core/Logger.php',
        'JchOptimize\\Core\\Optimize' => __DIR__ . '/../..' . '/src/Core/Optimize.php',
        'JchOptimize\\Core\\Output' => __DIR__ . '/../..' . '/src/Core/Output.php',
        'JchOptimize\\Core\\PageCache' => __DIR__ . '/../..' . '/src/Core/PageCache.php',
        'JchOptimize\\Core\\ReduceDom' => __DIR__ . '/../..' . '/src/Core/ReduceDom.php',
        'JchOptimize\\Core\\Traits\\Debug' => __DIR__ . '/../..' . '/src/Core/Traits/Debug.php',
        'JchOptimize\\Core\\Url' => __DIR__ . '/../..' . '/src/Core/Url.php',
        'JchOptimize\\Core\\Webp' => __DIR__ . '/../..' . '/src/Core/Webp.php',
        'JchOptimize\\Helper\\Html' => __DIR__ . '/../..' . '/src/Helper/Html.php',
        'JchOptimize\\Helper\\Renderer\\Section' => __DIR__ . '/../..' . '/src/Helper/Renderer/Section.php',
        'JchOptimize\\Helper\\Renderer\\Setting' => __DIR__ . '/../..' . '/src/Helper/Renderer/Setting.php',
        'JchOptimize\\Helper\\TabContent' => __DIR__ . '/../..' . '/src/Helper/TabContent.php',
        'JchOptimize\\Helper\\TabSettings' => __DIR__ . '/../..' . '/src/Helper/TabSettings.php',
        'JchOptimize\\Platform\\Cache' => __DIR__ . '/../..' . '/src/Platform/Cache.php',
        'JchOptimize\\Platform\\Excludes' => __DIR__ . '/../..' . '/src/Platform/Excludes.php',
        'JchOptimize\\Platform\\FileSystem' => __DIR__ . '/../..' . '/src/Platform/FileSystem.php',
        'JchOptimize\\Platform\\Html' => __DIR__ . '/../..' . '/src/Platform/Html.php',
        'JchOptimize\\Platform\\Http' => __DIR__ . '/../..' . '/src/Platform/Http.php',
        'JchOptimize\\Platform\\Paths' => __DIR__ . '/../..' . '/src/Platform/Paths.php',
        'JchOptimize\\Platform\\Plugin' => __DIR__ . '/../..' . '/src/Platform/Plugin.php',
        'JchOptimize\\Platform\\Profiler' => __DIR__ . '/../..' . '/src/Platform/Profiler.php',
        'JchOptimize\\Platform\\Settings' => __DIR__ . '/../..' . '/src/Platform/Settings.php',
        'JchOptimize\\Platform\\Uri' => __DIR__ . '/../..' . '/src/Platform/Uri.php',
        'JchOptimize\\Platform\\Utility' => __DIR__ . '/../..' . '/src/Platform/Utility.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf68135513ca42c68c04081b0863428ae::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf68135513ca42c68c04081b0863428ae::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitf68135513ca42c68c04081b0863428ae::$classMap;

        }, null, ClassLoader::class);
    }
}