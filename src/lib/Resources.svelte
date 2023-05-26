<script>
    import List, { Item, Graphic, Separator, Text } from '@smui/list';
import { dynasty } from './utils/helper';

    const today = new Date();
    const resources = [
        {
            name: "Assessment - NFL Draft Pick Transactions",
            url: "https://www.prosportstransactions.com/football/DraftTrades/Years/index.htm",
            icon: "assessment",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Assessment - NFL Depth Charts",
            url: "https://www.ourlads.com/nfldepthcharts/depthchartpos/QB",
            icon: "assessment",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Assessment - NFL Mock Draft DB",
            url: "https://www.nflmockdraftdatabase.com/",
            icon: "assessment",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Assessment - Sports Reference (CFB)",
            url: "https://www.sports-reference.com/cfb/",
            icon: "assessment",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Assessment - Sports Reference (NFL)",
            url: "https://www.pro-football-reference.com/",
            icon: "assessment",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Insights - DLF",
            url: "https://dynastyleaguefootball.com/",
            icon: "insights",
            premium: true,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Insights - Dynasty Daddy (Power Rankings)",
            url: "https://dynasty-daddy.com/",
            icon: "insights",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Insights - Dynasty Nerds",
            url: "https://www.dynastynerds.com/",
            icon: "insights",
            premium: true,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Insights - ETR",
            url: "https://establishtherun.com/",
            icon: "insights",
            premium: true,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Insight - Fantasy Pros",
            url: `https://www.fantasypros.com/`,
            icon: "insights",
            premium: true,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Insights - FTN Fantasy",
            url: "https://www.ftnfantasy.com/nfl",
            icon: "insights",
            premium: true,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Insights - Superflex (Power Rankings)",
            url: "https://www.dynastysuperflex.com/",
            icon: "insights",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Trade Calculator - DynastyProcess",
            url: "https://calc.dynastyprocess.com/",
            icon: "calculate",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Trade Calculator - Dynasty 101",
            url: "https://dynasty101.com/trade-calculator/",
            icon: "calculate",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Trade Calculator - Fantasy Football Trade Analyzer",
            url: `https://fantasyfootballcalculator.com/trade-analyzer`,
            icon: "calculate",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Trade Calculator - Fantasy Trade Database",
            url: `https://www.fantasycalc.com/calculator`,
            icon: "calculate",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Trade Calculator - KTC",
            url: "https://keeptradecut.com/trade-calculator",
            icon: "calculate",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "News and Articles - NFL Transactions",
            url: "https://www.spotrac.com/nfl/transactions/trade/",
            icon: "article",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "News and Articles - Reddit DynastyFF",
            url: "https://www.reddit.com/r/DynastyFF/",
            icon: "article",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Podcasts - The Fantasy Footballers",
            url: "https://www.thefantasyfootballers.com/",
            icon: "podcasts",
            premium: true,
            separator: true,
        },
        {
            name: "Podcasts - DEAD Podcast Coming Summer 2023",
            url: "https://www.podbean.com/",
            icon: "podcasts",
            premium: true,
            separator: true,
        },
    ];
</script>

<style>
    .pageBody {
        position: relative;
        z-index: 1;
    }

    :global(.list) {
        width: 90%;
        max-width: 800px;
        border: 1px solid
        var(--mdc-theme-text-hint-on-background, var(--d7d7d7));
        margin: 15px auto;
        padding: 0 !important;
        box-shadow: 0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree);
    }


    :global(.linkText) {
        font-size: 1.1em;
    }

    a {
        color: var(--g555);
        font-size: 1.1em;
        text-decoration: none;
    }

    h4 {
        text-align: center;
    }

    .disclaimer {
        color: #888;
        text-align: center;
    }
</style>

<div class="pageBody">
    <div class="banner">
        <h4>Helpful Dynasty Resources</h4>
    </div>

    <List class="list" dense>
        {#each resources as resource}
            {#if resource.dynastyOnly && dynasty}
                <a target="_blank" href="{resource.url}">
                    <Item>
                        {#if resource.icon}
                            <Graphic class="material-icons">{resource.icon}</Graphic>
                        {/if}
                        <Text class="linkText">{resource.name}{resource.premium ? "*" : ""}</Text>
                    </Item>
                    {#if resource.separator}
                        <Separator />
                    {/if}
                </a>
            {:else if resource.redraftOnly && !dynasty}
                <a target="_blank" href="{resource.url}">
                    <Item>
                        {#if resource.icon}
                            <Graphic class="material-icons">{resource.icon}</Graphic>
                        {/if}
                        <Text class="linkText">{resource.name}{resource.premium ? "*" : ""}</Text>
                    </Item>
                    {#if resource.separator}
                        <Separator />
                    {/if}
                </a>
            {:else if !resource.redraftOnly && !resource.dynastyOnly}
                <a target="_blank" href="{resource.url}">
                    <Item>
                        {#if resource.icon}
                            <Graphic class="material-icons">{resource.icon}</Graphic>
                        {/if}
                        <Text class="linkText">{resource.name}{resource.premium ? "*" : ""}</Text>
                    </Item>
                    {#if resource.separator}
                        <Separator />
                    {/if}
                </a>
            {/if}
        {/each}
    </List>
    <p class="disclaimer">*Some or all content is behind a paywall</p>
</div>
