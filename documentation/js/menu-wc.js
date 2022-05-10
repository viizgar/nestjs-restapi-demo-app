'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-rest-demo-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-f1b5ce9d8f5fe6e7ba5fba763d61f66ef8181422dbea4228a7109dc25b1d64f5dd9f5f9e5a513dc5d4a85e0006a3e122da81eb380934bd0931e4a8ca984d4710"' : 'data-target="#xs-controllers-links-module-AppModule-f1b5ce9d8f5fe6e7ba5fba763d61f66ef8181422dbea4228a7109dc25b1d64f5dd9f5f9e5a513dc5d4a85e0006a3e122da81eb380934bd0931e4a8ca984d4710"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-f1b5ce9d8f5fe6e7ba5fba763d61f66ef8181422dbea4228a7109dc25b1d64f5dd9f5f9e5a513dc5d4a85e0006a3e122da81eb380934bd0931e4a8ca984d4710"' :
                                            'id="xs-controllers-links-module-AppModule-f1b5ce9d8f5fe6e7ba5fba763d61f66ef8181422dbea4228a7109dc25b1d64f5dd9f5f9e5a513dc5d4a85e0006a3e122da81eb380934bd0931e4a8ca984d4710"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-f1b5ce9d8f5fe6e7ba5fba763d61f66ef8181422dbea4228a7109dc25b1d64f5dd9f5f9e5a513dc5d4a85e0006a3e122da81eb380934bd0931e4a8ca984d4710"' : 'data-target="#xs-injectables-links-module-AppModule-f1b5ce9d8f5fe6e7ba5fba763d61f66ef8181422dbea4228a7109dc25b1d64f5dd9f5f9e5a513dc5d4a85e0006a3e122da81eb380934bd0931e4a8ca984d4710"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-f1b5ce9d8f5fe6e7ba5fba763d61f66ef8181422dbea4228a7109dc25b1d64f5dd9f5f9e5a513dc5d4a85e0006a3e122da81eb380934bd0931e4a8ca984d4710"' :
                                        'id="xs-injectables-links-module-AppModule-f1b5ce9d8f5fe6e7ba5fba763d61f66ef8181422dbea4228a7109dc25b1d64f5dd9f5f9e5a513dc5d4a85e0006a3e122da81eb380934bd0931e4a8ca984d4710"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DogsModule.html" data-type="entity-link" >DogsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DogsModule-28c14d8273f84ba8136297448dd15047b417732a15630274fad2eb1e2df4afa61b555e2f524513d0141a0787dce4f015a14b34ad41936a887c169f58f2efd2b3"' : 'data-target="#xs-controllers-links-module-DogsModule-28c14d8273f84ba8136297448dd15047b417732a15630274fad2eb1e2df4afa61b555e2f524513d0141a0787dce4f015a14b34ad41936a887c169f58f2efd2b3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DogsModule-28c14d8273f84ba8136297448dd15047b417732a15630274fad2eb1e2df4afa61b555e2f524513d0141a0787dce4f015a14b34ad41936a887c169f58f2efd2b3"' :
                                            'id="xs-controllers-links-module-DogsModule-28c14d8273f84ba8136297448dd15047b417732a15630274fad2eb1e2df4afa61b555e2f524513d0141a0787dce4f015a14b34ad41936a887c169f58f2efd2b3"' }>
                                            <li class="link">
                                                <a href="controllers/DogsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DogsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DogsModule-28c14d8273f84ba8136297448dd15047b417732a15630274fad2eb1e2df4afa61b555e2f524513d0141a0787dce4f015a14b34ad41936a887c169f58f2efd2b3"' : 'data-target="#xs-injectables-links-module-DogsModule-28c14d8273f84ba8136297448dd15047b417732a15630274fad2eb1e2df4afa61b555e2f524513d0141a0787dce4f015a14b34ad41936a887c169f58f2efd2b3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DogsModule-28c14d8273f84ba8136297448dd15047b417732a15630274fad2eb1e2df4afa61b555e2f524513d0141a0787dce4f015a14b34ad41936a887c169f58f2efd2b3"' :
                                        'id="xs-injectables-links-module-DogsModule-28c14d8273f84ba8136297448dd15047b417732a15630274fad2eb1e2df4afa61b555e2f524513d0141a0787dce4f015a14b34ad41936a887c169f58f2efd2b3"' }>
                                        <li class="link">
                                            <a href="injectables/DogsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DogsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DogsController.html" data-type="entity-link" >DogsController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateDogDto.html" data-type="entity-link" >CreateDogDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Dog.html" data-type="entity-link" >Dog</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDogDto.html" data-type="entity-link" >UpdateDogDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DogsService.html" data-type="entity-link" >DogsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});