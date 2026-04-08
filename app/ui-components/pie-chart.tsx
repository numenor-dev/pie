"use client"

import { Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
} from "@/app/ui-components/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/app/ui-components/chart"

export const description = "A pie chart with no separator"

const chartData = [
    { stock: "BRK", value: 275, fill: "#76DBAB" },
    { stock: "AAPL", value: 200, fill: "#4BB380" },
    { stock: "KRW", value: 187, fill: "#358F62" },
    { stock: "MSFT", value: 173, fill: "#226E45" },
    { stock: "SE", value: 90, fill: "#134D2B" },
]

const chartConfig = {
    stock: {
        label: "Stock",
    },
    BRK: {
        label: "BRK",
    },
    AAPL: {
        label: "AAPL",
    },
    KRW: {
        label: "KRW",
    },
    MSFT: {
        label: "MSFT",
    },
    SE: {
        label: "SE",
    },
} satisfies ChartConfig

export function ChartPie() {
    return (
        <Card className="flex flex-col bg-transparent">
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square h-72"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="stock"
                            stroke="0"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
