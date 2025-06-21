---
sidebar_label: 'Questions'
sidebar_position: 4
---

# Questions

Since PR allows interaction with Peds it would only make sense for you to be able to ~~annoy~~
interrogate them. Similar to [Search Items](./search-items.md), `Questions.xml` define **Ped Stop Questions**
while `TrafficStopQuestions.xml` defines...exactly: **Traffic Stop Questions**.\
Questions are pretty similar to STP, however PR adds additional parameters for a more immersive
gameplay experience once again!

:::tip
Well and again, in case you are lazy (no judgement), PR also ships with 
**Questions Reborn** made by Officer34 to your luck.
:::

Let's take a look at a basic `QuestionGroup`:\
*(Don't get confused by stuff like `~s~~h~`, those are [formatting tags](https://wiki.rage.mp/wiki/Fonts_and_Colors) 
used by GTA.)*
- `Name`: The name of the question group/category
- `Questions`: The questions belonging to this question group
    - `Question`: The content of the question
      - `Answers`: The answers belonging to this question
```xml
<QuestionGroups>
    <QuestionGroup Name="~o~~h~Investigation Questions">
        <Questions>
            <Question Question="Hey there I am Officer [Name]">
                <Answers>
                    ...
                </Answers>
            </Question>
            ...
        </Questions>
    </QuestionGroup>
    ...
</QuestionGroups>
```

Nothing special **yet**, but wait, take a look at an example `Answer`:
- `PedMood`: During which mood the ped should use this answer (`Sad`, `Nervous`, `Mad`, `Neutral`, `Sovereign`)
- `IsHigh`: Whether the ped should use this answer when being high (defaults to `False`)
- `IsDrunk`: Whether the ped should use this answer when being drunk (defaults to `False`)
```xml
<Answer PedMood="Sad">Oh...hi, Officer [Name].</Answer>
<Answer PedMood="Nervous" IsHigh="True">Uhh... Officer [Name]... am I glowing?</Answer>
<Answer PedMood="Mad" IsDrunk="True">Oooofficer [Name]! Go 'way!</Answer>
<Answer PedMood="Neutral" IsDrunk="True" IsHigh="True">Heeyyy [Name]... wild stuff.</Answer>
```
The ped mood also decides what kind of gesture animation the ped might play during answering.

:::important
Be aware that PR checks the attributes **exact**. For example when the ped is drunk and high,
it will look for questions that have **both of these** attributes set to `True`.
Just like when a ped is just drunk PR will use questions that **only** have the drunk attribute
set to `True`.
:::

These attributes **do not** define a ped's state (`InteractionSettings.ini` offers
some customization though)!

