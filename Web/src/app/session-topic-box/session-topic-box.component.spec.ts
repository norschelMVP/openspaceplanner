import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { SessionTopicBoxComponent } from "./session-topic-box.component";
import { SessionService } from "../session/session.service";
import { Session } from "../models/session";
import { Topic } from "../models/topic";
import * as moq from "typemoq";

describe("session topic box", () => {
    xit("should set error message when there is one owner with two topics in the same slot", () => {
        const session = new Session();
        session.topics.push(<Topic>{ owner: "Test", slotId: "1", roomId: "1" });
        session.topics.push(<Topic>{ owner: "Test", slotId: "1", roomId: "2" });

        // mock session service (wdc-1)

        // create component and assign topic (wdc-2)

        // expect (wdc-3)
    });

    xit("should display error message when there are errors", () => {
        const session = new Session();
        session.topics.push(<Topic>{ owner: "Test", slotId: "1", roomId: "1" });
        session.topics.push(<Topic>{ owner: "Test", slotId: "1", roomId: "2" });

        const sessionServiceMock = moq.Mock.ofType<SessionService>();
        sessionServiceMock.setup(s => s.currentSession).returns(() => session);

        // configure test bed (wdc-4)

        // test bed create component (wdc-5)

        // query element (.topic-error -> parent) (wdc-6)

        // expect display style to be empty (wdc-7)
    });

    xit("should set error message when there is one owner with two topics in the same slot (snapshot)", () => {
        const session = new Session();
        session.topics.push(<Topic>{ owner: "Test", slotId: "1", roomId: "1" });
        session.topics.push(<Topic>{ owner: "Test", slotId: "1", roomId: "2" });

        const sessionServiceMock = moq.Mock.ofType<SessionService>();
        sessionServiceMock.setup(s => s.currentSession).returns(() => session);

        TestBed.configureTestingModule({
            declarations: [
                SessionTopicBoxComponent
            ],
            providers: [
                { provide: SessionService, useFactory: () => sessionServiceMock.object }
            ]
        }).compileComponents();

        const fixture = TestBed.createComponent(SessionTopicBoxComponent);
        const comp = fixture.componentInstance;
        comp.topic = session.topics[0];

        fixture.detectChanges();

        // expect to match snapshot (wdc-8)
    });
});
