<?php

namespace App\Application\Ticket\Service;

use App\Application\Ticket\Dto\TicketSummaryCollectionDto;
use App\Application\Ticket\ReadModel\RecentTicketViewRepository;
use App\Application\Ticket\ReadModel\TicketSummaryView;

readonly class RecentTicketFilterService
{
    public function __construct(
        protected RecentTicketViewRepository $repository
    ) {}

    public function getList(
        string $sortBy = 'updatedAt',
        string $sortDirection = 'DESC'
    ): TicketSummaryCollectionDto {
        $list = $this->repository->findRecent()->all();

        \usort($list, static function (TicketSummaryView $a, TicketSummaryView $b) use ($sortBy, $sortDirection) {
            $vA = $a->$sortBy;
            $vB = $b->$sortBy;

            if ($vA === $vB) {
                return 0;
            }

            $result = $vA <=> $vB;

            return \strtoupper($sortDirection) === 'DESC' ? -$result : $result;
        });

        return new TicketSummaryCollectionDto($list);
    }
}
