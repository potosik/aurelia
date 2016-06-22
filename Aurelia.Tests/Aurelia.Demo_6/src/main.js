export function configure (aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
    //aurelia.use
    //    .defaultBindingLanguage()
    //    .defaultResources()
    //    .history()
    //    .router()
    //    .eventAggregator();

    aurelia.start().then(x => x.setRoot());
}