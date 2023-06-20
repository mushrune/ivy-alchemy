import React, {useState} from 'react';
import classNames from "classnames";

const colorClasses: Array<string> = [
    "aspect-square rounded-md w-12 m-2 transition ease-in-out duration-300 bg-red-200 hover:bg-red-600 border border-4 border-slate-200",
    "aspect-square rounded-md w-12 m-2 transition ease-in-out duration-300 bg-orange-200 hover:bg-orange-600 border border-4 border-slate-200",
    "aspect-square rounded-md w-12 m-2 transition ease-in-out duration-300 bg-yellow-200 hover:bg-yellow-600 border border-4 border-slate-200",
    "aspect-square rounded-md w-12 m-2 transition ease-in-out duration-300 bg-green-200 hover:bg-green-600 border border-4 border-slate-200",
    "aspect-square rounded-md w-12 m-2 transition ease-in-out duration-300 bg-blue-200 hover:bg-blue-600 border border-4 border-slate-200",
    "aspect-square rounded-md w-12 m-2 transition ease-in-out duration-300 bg-purple-200 hover:bg-purple-600 border border-4 border-slate-200",
    "aspect-square rounded-md w-12 m-2 transition ease-in-out duration-300 bg-gray-200 hover:bg-black-600 border border-4 border-slate-200"
];

interface FavoriteColorSelectorProps
{
    colorClass: string;
}

const FavoriteColorSelector: React.FC<FavoriteColorSelectorProps> = ({colorClass}) => {
    return(
        <div className={colorClass} />
    )
}

const FavoriteColorBlock: React.FC = () => {
    const [ favoriteColor, setFavoriteColor ] = useState<string>("green");

    return(
        <div className="flex justify-around justify-between items-center">
            { colorClasses.map(( colorClass) => (<FavoriteColorSelector colorClass={colorClass} />)) }
        </div>
    );
}

export default FavoriteColorBlock;