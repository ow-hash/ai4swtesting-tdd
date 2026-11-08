# Clarifying questions

Categories: **[ทำทันที]** · **[เก็บไว้ทีหลัง]** · **[ตัดทิ้ง]**

## Accuracy

1. **[ทำทันที]** How is time rounded when it doesn't fall exactly on a half-hour unit? - Time is tracked in half-hour units, but real work rarely fits that exactly. Is 20 minutes rounded up to 0.5 hours, down to 0, or to the nearest unit? Each rule records a different amount of time, so testers need to know which one is correct.

2. **[ทำทันที]** What is the minimum and maximum amount of time that can be entered? - The criteria don't say whether 0 hours is allowed, or whether there's an upper limit per entry, per day or per week. Without limits, a user could log 30 hours in one day, and the record of time spent would be wrong.

3. **[ทำทันที]** How is time entered: as a duration, a start and end time, or a timer? - The way time is captured affects how accurate it can be. For example, "1.5", "1:30" and "09:00–10:30" are validated differently, and an entry like "1.25" could be rejected, rounded or accepted as typed.

4. **[เก็บไว้ทีหลัง]** What counts as a "specific project," and where does the project list come from? - We need to know whether projects come from a fixed list managed by someone else or can be typed in freely. Free text risks the same project being logged under different names, such as "Website Redesign" and "website-redesign", which would make the history wrong.

5. **[เก็บไว้ทีหลัง]** When is a timesheet considered "complete," and can it be edited or deleted afterwards? - A project and an amount of time are required for completion, but it's not clear whether a completed entry is locked. If entries can be changed later, the history may no longer show what was originally logged.

6. **[เก็บไว้ทีหลัง]** Why is the history being kept, and what time period must it show? - The goal is a history of time spent per project, but it's not stated whether that means totals per day, week, month or all time, or how long records are kept. This decides which totals testers need to check against the individual entries.

## Consistency

7. **[ตัดทิ้ง]** Is the half-hour unit applied the same way everywhere time is shown? - Entry screens, history views, totals and any exports should all use the same unit and format. For example, history showing "1.5 hrs" while a report shows "1h 30m" or "90 min" would be inconsistent.

8. **[ตัดทิ้ง]** When does a day or week begin and end for tracking purposes, and in which time zone? - If a user logs time near midnight or travels across time zones, the entry could land on different dates in different views. We need one defined rule for dates and time zones that applies across the whole system.

9. **[เก็บไว้ทีหลัง]** Who exactly is "I," and are there any exceptions to "only I should be able to see my tracked time"? - Can managers, administrators, payroll or project owners see the data, even as anonymous totals per project? If any exceptions exist, they need to be defined and applied the same way on every screen, report, export and API.

10. **[ทำทันที]** Where else is tracked time shown or used, and must it match everywhere? - If entries also feed project totals, reports, invoices or other systems, the per-project figures need to be identical in all of them. We also need to know how errors are handled, such as two entries for the same project and time slot.
