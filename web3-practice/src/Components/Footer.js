import React from "react";
import { Grid, Icon, Input, Button } from "semantic-ui-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      
      <div className={styles.footerContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.middleContainer}>
            <Grid columns={2} padded container>
              <Grid.Column>
                <div>
                  <span style={{ fontSize: "22px", fontWeight: "600" }}>Stay in the loop</span>
                  <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</p>
                  <div className={styles.signUpContainer}>
                    <Input style={{ width: "30em" }} placeholder="Your email address">
                      <input data-testid="my-input-1" />
                    </Input>
                    <Button style={{ padding: "15px 30px" }} content="Sign up" primary />
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div style={{ marginLeft: "25px" }}>
                  <span style={{ fontSize: "22px", fontWeight: "600" }}>Join the community</span>
                  <div className={styles.sns}>

                    {/* <Grid>
                      <Grid.Row centered columns={6}>
                        <Grid.Column>
                          <div className={styles.snsContainer}>
                            <Icon name="twitter" size="big" />
                          </div>
                        </Grid.Column>
                        <Grid.Column>
                          <div className={styles.snsContainer}>
                            <Icon name="instagram" size="big" />
                          </div>
                        </Grid.Column>
                        <Grid.Column>
                          <div className={styles.snsContainer}>
                            <Icon name="discord" size="big" />
                          </div>
                        </Grid.Column>
                        <Grid.Column>
                          <div className={styles.snsContainer}>
                            <Icon name="reddit" size="big" />
                          </div>
                        </Grid.Column>
                        <Grid.Column>
                          <div className={styles.snsContainer}>
                            <Icon name="youtube" size="big" />
                          </div>
                        </Grid.Column>
                        <Grid.Column>
                          <div className={styles.snsContainer}>
                            <Icon name="mail" size="big" />
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid> */}
                  </div>
                </div>
              </Grid.Column>
            </Grid>
          </div>
          <div className={styles.bottomContainer}>
            <div>©2022 COPYRIGHT Kim2Oh2 All rights reserved.</div>
            <ul>
              <li>Privacy Prolicy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}