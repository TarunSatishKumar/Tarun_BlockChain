var blockChainBlogApp = angular.module('blockChainBlogApp', ['ui.router']);

blockChainBlogApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/introduction');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('introduction', {
            url: '/introduction',
            templateUrl: 'views/partial-home.html'
        })
         .state('blckchnfeatures', {
            url: '/blckchnfeatures',
            templateUrl: 'views/blckchnfeatures.html'
        })

        .state('concept',{
            url: '/concept',
            templateUrl: 'views/concept.html'
        })
        .state('traditionaldbvsblckdb',{
            url: '/traditionaldbvsblckdb',
            templateUrl: 'views/traditionaldbvsblckdb.html'
        })
        .state('crudvsread',{
            url: '/crudvsread',
            templateUrl: 'views/crudvsread.html'
        }) 
        .state('mtree',{
            url: '/mtree',
            templateUrl: 'views/mtree.html'
        }) 
        .state('types',{
            url: '/types',
            templateUrl: 'views/types.html'
        })
        .state('features',{
            url: '/features',
            templateUrl: 'views/features.html'
        })
          .state('benefits',{
            url: '/benefits',
            templateUrl: 'views/benefits.html'
        })
           .state('banking',{
            url: '/banking',
            templateUrl: 'views/banking.html'
        })
            .state('nonfinancial',{
            url: '/nonfinancial',
            templateUrl: 'views/nonfinancial.html'
        })
            .state('cross',{
            url: '/cross',
            templateUrl: 'views/cross.html'
        })
            .state('public',{
            url: '/public',
            templateUrl: 'views/public.html'
        })
        .state('permissioned',{
            url: '/permissioned',
            templateUrl: 'views/permissioned.html'
        })
        .state('private',{
            url: '/private',
            templateUrl: 'views/private.html'
        })
        .state('government',{
            url: '/government',
            templateUrl: 'views/government.html'
        })
        .state('exploration',{
            url: '/exploration',
            templateUrl: 'views/exploration.html'
        })
        .state('challenges',{
            url: '/challenges',
            templateUrl: 'views/challenges.html'
        })
        .state('mitigation',{
            url: '/mitigation',
            templateUrl: 'views/mitigation.html'
        })
        .state('rbiBlockchain',{
            url: '/rbiBlockchain',
            templateUrl: 'views/rbiBlockchain.html'
        })
        .state('wayFwd',{
            url: '/wayFwd',
            templateUrl: 'views/wayFwd.html'
        })
        .state('faq',{
            url: '/faq',
            templateUrl: 'views/faq.html'
        })
        .state('aboutus',{
            url: '/aboutus',
            templateUrl: 'views/aboutus.html'
        })
        .state('contact',{
            url: '/contact',
            templateUrl: 'views/contact.html'
        })
        .state('intrvwqus',{
            url: '/intrvwqus',
            templateUrl: 'views/intrvwqus.html'
        });

});
