import { TestBed, fakeAsync, flush, tick, discardPeriodicTasks } from "@angular/core/testing";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { Session } from "../models/session";
import { SessionService } from "../session/session.service";
import { CreateSessionComponent } from "./create-session.component";
import { BusySpinnerComponent } from "../shared/busy-spinner/busy-spinner.component";
import { Subject } from "rxjs";
import * as moq from "typemoq";

describe("create session", () => {
    // fake the async
    it("should only display busy spinner if not loaded in time", (() => {
        const lastSessions$ = new Subject<Session[]>();

        const sessionServiceMock = moq.Mock.ofType<SessionService>();
        sessionServiceMock.setup(s => s.getLastSessions()).returns(() => lastSessions$.asObservable());

        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                FormsModule,
            ],
            declarations: [
                CreateSessionComponent,
                BusySpinnerComponent
            ],
            providers: [
                { provide: SessionService, useFactory: () => sessionServiceMock.object },
                { provide: Router, useFactory: () => {} }
            ]
        }).compileComponents();

        const fixture = TestBed.createComponent(CreateSessionComponent);
        const comp = fixture.componentInstance;
        fixture.detectChanges();

        // tick and expect (wdc-13)
    }));
});
