import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../data/mockGeoFeatures";
import { tokens } from "../theme";
import { mockGeographyData as data } from "../data/mockData";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      colors="nivo"
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={ 80 }
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      projectionType="mercator"
      enableGraticule={true}
      graticuleLineColor="#ccc"
      graticuleLineWidth={0.5}
      borderWidth={0.5}
      borderColor="#152538"
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        },
        {
          id: 'gradient',
          type: 'linearGradient',
          colors: [
            {
              offset: 0,
              color: '#000'
            },
            {
              offset: 100,
              color: 'inherit'
            }
          ]
        }
      ]}
      fill={[
        {
          match: {
            id: 'CAN'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'CHN'
          },
          id: 'lines'
        },
        {
          match: {
            id: 'ATA'
          },
          id: 'gradient'
        }
      ]}
      legends={
        !isDashboard
          ? [
            {
              anchor: "bottom-left",
              direction: "column",
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemTextColor: colors.grey[100],
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#ffffff",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]
          : undefined
      }
      role="application"
      value="value"
      isInteractive={true}
      onClick={(feature, event) => {
        console.log('Feature clicked:', feature, event);
      }}
      onMouseEnter={(feature, event) => {
        console.log('Mouse enter:', feature, event);
      }}
      onMouseMove={(feature, event) => {
        console.log('Mouse move:', feature, event);
      }}
      onMouseLeave={(feature, event) => {
        console.log('Mouse leave:', feature, event);
      }}
      
      
      fillColor={feature => {
        if (feature.id === 'CAN') return '#38bcb2';
        if (feature.id === 'CHN') return '#eed312';
        if (feature.id === 'ATA') return '#000000';
        return '#ffffff';
      }}
      // match={feature => feature.properties.name}
    />
  );
};

export default GeographyChart;
