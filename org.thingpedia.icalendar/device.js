// -*- mode: js; indent-tabs-mode: nil; js-basic-offset: 4 -*-
//
// Copyright 2016 Giovanni Campagna <gcampagn@cs.stanford.edu>
//                Daniel Melendez <dmelende@stanford.edu>
//
// See COPYING for details

const Tp = require('thingpedia');

module.exports = new Tp.DeviceClass({
    Name: 'iCalendarDevice',

    _init: function(engine, state) {
        this.parent(engine, state);

        this.uniqueId = 'org.thingpedia.icalendar-' + this.url;
        this.name = "iCalendar at " + this.url;
        this.description = "Checks for events";
    },

    get url() {
        return this.state.url;
    }
});
