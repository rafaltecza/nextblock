import React from 'react';

export const combineComponents = (...components: (({ children }: { children: React.ReactNode }) => JSX.Element)[]) => {
    return components.reduce(
        (AccumulatedComponents, CurrentComponent) =>
            ({ children }: { children: React.ReactNode }): JSX.Element =>
                (
                    <AccumulatedComponents>
                        <CurrentComponent>{children}</CurrentComponent>
                    </AccumulatedComponents>
                ),
        ({ children }) => <>{children}</>
    );
};