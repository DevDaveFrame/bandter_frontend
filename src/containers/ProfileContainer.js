import React from "react";

import BioSection from "../components/BioSection";
import { Grid, Segment } from "semantic-ui-react";

function ProfileContainer(props) {
    return (
      <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column width={4}>
            <BioSection />
          </Grid.Column>

          <Grid.Column width={12}>
            {/* <GoalsSection handleLogin={props.handleLogin} user={user} /> */}
            "NOTHING"
            <Segment>
              {/* <RunsSection handleLogin={props.handleLogin} runs={user.runs} /> */}
              "HERE"
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
}
export default ProfileContainer;
