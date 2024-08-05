interface Country {
    name: string;
    flag: string;
    relationWithINR : number
}

interface CountryCardProps {
    setSelectedCountry: (country: string) => void,
    CountryList : Country[],
    selectedCountry: string;
}