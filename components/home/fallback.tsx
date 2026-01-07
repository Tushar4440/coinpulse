import React from 'react';

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="flex justify-between items-center mb-4">
        <div className="header">
          <div className="header-image skeleton" />
          <div className="info">
            <div className="header-line-sm skeleton" />
            <div className="header-line-lg skeleton" />
          </div>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="period-button-skeleton skeleton" />
          ))}
        </div>
      </div>
      <div className="chart">
        <div className="chart-skeleton skeleton" />
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <div className="trending-coins-table">
        <table className="w-full">
          <tbody>
            {[1, 2, 3].map((i) => (
              <tr key={i}>
                <td className="name-cell">
                  <div className="name-link">
                    <div className="name-image skeleton" />
                    <div className="name-line skeleton" />
                  </div>
                </td>
                <td className="price-cell">
                  <div className="price-line skeleton ml-auto" />
                </td>
                <td className="change-cell">
                  <div className="price-change justify-end">
                    <div className="change-icon skeleton" />
                    <div className="change-line skeleton" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};