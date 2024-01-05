import * as R from 'ramda'
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { useAirportDistance, useAirportList } from '../../../api/airports/hooks';

// 0.2613 kg/passenger-km (combustion)
// 0.02114 kg/passenger-km (well to tank)
const FACTOR_WELL_TO_TANK = 0.02114
const FACTOR_DISTANCE = 0.2613

type MaybeAirport = AirportsApi.Airport | undefined

const AirportDistanceScreeen = () => {
    const [selectedOrigin, setSelectedOrigin] = useState<MaybeAirport>(undefined)
    const [selectedDest, setSelectedDest] = useState<MaybeAirport>(undefined)

    const airports = useAirportList()

    const distance = useAirportDistance(
        selectedOrigin,
        selectedDest
    )

    const kms = distance / 1000
    const emissions_wellToTank = kms * FACTOR_WELL_TO_TANK
    const emissions_distance = kms * FACTOR_DISTANCE

    const findAirport = (code: string) => R.find((a) => a.code === code, airports)

    // TODO: Make select own component
    // Make .map more efficient?
    return <>
        <FormControl fullWidth variant='filled'>
            <Select
                value={selectedOrigin?.code}
                onChange={(e) => {
                    e.preventDefault()
                    setSelectedOrigin(findAirport(e.target.value))
                }}
                >
                <InputLabel id="origin-select">Origin</InputLabel>
                {R.map((a) => <MenuItem value={a.code}>{a.code} {a.name}</MenuItem>, airports)}
            </Select>
            <Select
                value={selectedDest?.code}
                onChange={(e) => {
                    e.preventDefault()
                    setSelectedDest(findAirport(e.target.value))
                }}
                >
                <InputLabel id="destination-select">Destination</InputLabel>
                {R.map((a) => <MenuItem value={a.code}>{a.code} {a.name}</MenuItem>, airports)}
            </Select>
        </FormControl>
        
        <p /><p />
        {Math.round(kms)} km <p />
        {Math.round(emissions_wellToTank)} kg CO2 for producing the fuel <p />
        {Math.round(emissions_distance)} kg CO2 for flight distance
    </>
}

export default AirportDistanceScreeen
